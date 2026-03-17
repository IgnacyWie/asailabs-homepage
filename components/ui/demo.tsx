import { BackgroundPaths } from "@/components/ui/background-paths";
import TeamShowcase from "@/components/ui/team-showcase";
import TimeLine_01 from "@/components/ui/release-time-line";

export function DemoBackgroundPaths() {
  return <BackgroundPaths title="Background Paths" />;
}

export default function DemoOne() {
  return <TimeLine_01 />;
}

export function TeamShowcaseDemo() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <TeamShowcase />
    </div>
  );
}
