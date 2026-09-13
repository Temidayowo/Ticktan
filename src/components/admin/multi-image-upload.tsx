"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { FaSpinner, FaUpload, FaXmark } from "react-icons/fa6";

type MultiImageUploadProps = {
  value: string[];
  onChange: (urls: string[]) => void;
  label?: string;
};

const MultiImageUpload = ({ value, onChange, label }: MultiImageUploadProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error ?? "Upload failed");
      }

      onChange([...value, data.url]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  function removeAt(index: number) {
    onChange(value.filter((_, i) => i !== index));
  }

  return (
    <div className="flex flex-col gap-2">
      {label && <span className="text-sm font-medium text-navy">{label}</span>}

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {value.map((url, index) => (
          <div
            key={url + index}
            className="relative aspect-4/3 overflow-hidden rounded-xl border border-border"
          >
            <Image src={url} alt="" fill className="object-cover" />
            <button
              type="button"
              onClick={() => removeAt(index)}
              className="absolute right-1.5 top-1.5 flex size-6 items-center justify-center rounded-full bg-navy/80 text-white transition-colors hover:bg-coral"
              aria-label="Remove image"
            >
              <FaXmark className="size-3" />
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="flex aspect-4/3 flex-col items-center justify-center gap-1.5 rounded-xl border border-dashed border-border bg-gray-50 text-xs text-muted-foreground transition-colors hover:border-coral hover:text-coral disabled:opacity-60"
        >
          {uploading ? (
            <FaSpinner className="size-4 animate-spin" />
          ) : (
            <FaUpload className="size-4" />
          )}
          {uploading ? "Uploading…" : "Add image"}
        </button>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp,image/gif,image/avif"
        onChange={handleFileChange}
        className="hidden"
      />

      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
};

export default MultiImageUpload;
