"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { FaSpinner, FaUpload, FaXmark } from "react-icons/fa6";

type ImageUploadProps = {
  value: string | null;
  onChange: (url: string | null) => void;
  label?: string;
};

const ImageUpload = ({ value, onChange, label }: ImageUploadProps) => {
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

      onChange(data.url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <span className="text-sm font-medium text-navy">{label}</span>
      )}

      {value ? (
        <div className="relative aspect-video w-full max-w-sm overflow-hidden rounded-xl border border-border">
          <Image src={value} alt="Uploaded image" fill className="object-cover" />
          <button
            type="button"
            onClick={() => onChange(null)}
            className="absolute right-2 top-2 flex size-7 items-center justify-center rounded-full bg-navy/80 text-white transition-colors hover:bg-coral"
            aria-label="Remove image"
          >
            <FaXmark className="size-3.5" />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="flex aspect-video w-full max-w-sm flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border bg-gray-50 text-sm text-muted-foreground transition-colors hover:border-coral hover:text-coral disabled:opacity-60"
        >
          {uploading ? (
            <FaSpinner className="size-5 animate-spin" />
          ) : (
            <FaUpload className="size-5" />
          )}
          {uploading ? "Uploading…" : "Click to upload an image"}
        </button>
      )}

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

export default ImageUpload;
