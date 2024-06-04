"use client";

import AProposPresentation from "@/components/a_propos/AProposPresentation";
import AProposVision from "@/components/a_propos/AProposVision";
import AProposValeurs from "@/components/a_propos/AProposValeurs";
import AProposEquipe from "@/components/a_propos/AProposEquipe";
import AProposStats from "@/components/a_propos/AProposStats";
import AProposNotreOasis from "@/components/a_propos/AProposNotreOasis";

export default function APropos() {
  return (
    <>
      <div
        className="bg-cover"
        style={{ backgroundImage: "url('/motif_background.png')" }}
      >
        <AProposPresentation />
        <AProposStats />
        <AProposNotreOasis />
        <AProposVision />
        <AProposValeurs />
        <AProposEquipe />
      </div>
    </>
  );
}
