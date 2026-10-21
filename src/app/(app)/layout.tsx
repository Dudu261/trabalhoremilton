import { AppShell } from "@/app/components/layout/AppShell"

export default function LayoutApp({ children }: { children: React.ReactNode }) {
  return <AppShell>{children}</AppShell>
}