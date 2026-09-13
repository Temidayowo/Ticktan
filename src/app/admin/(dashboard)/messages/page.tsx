import { prisma } from "@/lib/prisma";
import { markMessageRead, deleteMessage } from "./actions";
import ConfirmSubmitButton from "@/components/admin/confirm-submit-button";

const formatDate = (date: Date) =>
  new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);

export default async function AdminMessagesPage() {
  const messages = await prisma.contactMessage.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-navy">Contact messages</h1>

      {messages.length === 0 ? (
        <p className="rounded-2xl bg-white p-8 text-center text-muted-foreground shadow-sm">
          No messages yet.
        </p>
      ) : (
        <div className="flex flex-col gap-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`rounded-2xl bg-white p-6 shadow-sm ${
                message.read ? "" : "border-l-4 border-coral"
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-semibold text-navy">
                    {message.name}{" "}
                    <span className="font-normal text-muted-foreground">
                      &lt;{message.email}&gt;
                    </span>
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {formatDate(message.createdAt)}
                  </p>
                </div>
                <div className="flex gap-2">
                  {!message.read && (
                    <form action={markMessageRead.bind(null, message.id)}>
                      <button
                        type="submit"
                        className="rounded-lg px-3 py-1.5 text-sm font-medium text-navy transition-colors hover:bg-gray-100"
                      >
                        Mark read
                      </button>
                    </form>
                  )}
                  <form action={deleteMessage.bind(null, message.id)}>
                    <ConfirmSubmitButton
                      confirmMessage="Delete this message?"
                      className="rounded-lg px-3 py-1.5 text-sm font-medium text-destructive transition-colors hover:bg-red-50"
                    >
                      Delete
                    </ConfirmSubmitButton>
                  </form>
                </div>
              </div>
              <p className="mt-4 whitespace-pre-wrap text-sm text-muted-foreground">
                {message.message}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
