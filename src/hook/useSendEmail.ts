import type { FormValues } from "@/types/formValues";
import { useState } from "react";

export function useSendEmail() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendEmail = async (data: FormValues) => {
    setLoading(true);
    setSuccess(false);
    setError(null);
    try {
      const response = await fetch("", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok ❌");
      }
      setSuccess(true);
    } catch (error) {
      setError("Failed to send email. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return { sendEmail, loading, success, error };
}
