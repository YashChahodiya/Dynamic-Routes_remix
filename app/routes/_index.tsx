import type { MetaFunction } from "@remix-run/node";
import Dashboard from "./../components/Dashboard";

export const meta: MetaFunction = () => {
  return [
    { title: "New remix" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="">
      <Dashboard />
    </div>
  );
}
