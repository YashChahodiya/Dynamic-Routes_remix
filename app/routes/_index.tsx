import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New remix" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return <div className="flex h-screen items-center justify-center">demo</div>;
}
