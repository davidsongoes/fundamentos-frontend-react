"use server";

export const fetcher = async (url: string | URL | Request) =>
  fetch(url).then((r) => r.json());
