import { SceneTrack } from "@/components/home/SceneTrack";
import { Clients } from "@/components/home/Clients";
import { SelectedWork } from "@/components/home/SelectedWork";
import { Testimonials } from "@/components/home/Testimonials";
import { Faq } from "@/components/home/Faq";
import { CtaBand } from "@/components/home/CtaBand";

export default function HomePage() {
  return (
    <>
      <SceneTrack />
      <Clients />
      <SelectedWork />
      <Testimonials />
      <Faq />
      <CtaBand />
    </>
  );
}
