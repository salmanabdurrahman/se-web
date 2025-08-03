import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return new Date(date).toLocaleDateString("en-GB", options);
}

export function formatCurrency(amount: number | bigint): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}

export function generateRandomNumber(length: number): number {
  const min = Math.pow(10, length - 1);
  const max = Math.pow(10, length) - 1;

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateRandomString(length: number): string {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

export async function convertUSDToIDR(amountInUSD: number) {
  try {
    const response = await fetch("https://open.er-api.com/v6/latest/USD");
    if (!response.ok) {
      throw new Error("Failed to fetch exchange rate");
    }

    const data = await response.json();
    const exchangeRate = data.rates.IDR;

    if (!exchangeRate) {
      throw new Error("Exchange rate for IDR not found");
    }

    return Math.round(amountInUSD * exchangeRate);
  } catch (error) {
    console.error("Error converting USD to IDR:", error);
    throw new Error("Failed to convert USD to IDR");
  }
}
