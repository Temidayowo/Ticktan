import { getSiteSettings } from "@/lib/data/settings";
import SettingsForm from "@/components/admin/settings-form";

export default async function AdminSettingsPage() {
  const settings = await getSiteSettings();

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold text-navy">Site settings</h1>
      <SettingsForm defaultValues={settings} />
    </div>
  );
}
