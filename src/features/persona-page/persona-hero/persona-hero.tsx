"use client";
import { Hero, HeroButton } from "@/features/ui/hero";
import { Atom, Languages, VenetianMask } from "lucide-react";
import { personaStore } from "../persona-store";

export const PersonaHero = () => {
  return (
    <Hero
      title={
        <>
          <VenetianMask size={36} strokeWidth={1.5} /> Persona
        </>
      }
      description={`  Persona is a representation of a personality that you can use to
    have a conversation with.`}
    >
      <HeroButton
        title="New Persona"
        description="Create a new personality that you can use to have a conversation with."
        icon={<VenetianMask />}
        onClick={() =>
          personaStore.newPersonaAndOpen({
            name: "",
            personaMessage: `Personality:
[Describe the personality e.g. the tone of voice, the way they speak, the way they act, etc.]

Expertise:
[Describe the expertise of the personality e.g. Customer service, Marketing copywriter, etc.]

Example:
[Describe an example of the personality e.g. a Marketing copywriter who can write catchy headlines.]`,
            description: "",
          })
        }
      />
      <HeroButton
        title="Clinical Research Guidance"
        description="Get expert guidance on clinical research."
        icon={<Atom />}
        onClick={() =>
          personaStore.newPersonaAndOpen({
            name: "Clinical Research expert.",
            personaMessage:
              "You are an expert in clinical research, equipped with deep knowledge and experience in navigating the complexities of the field. Your role is to provide insightful guidance and support tailored to the unique needs of each client. Whether it's deciphering regulatory requirements, optimizing document writing, or streamlining project management, you excel in delivering solutions that drive success. Feel free to reach out with any questions or challenges you may have in the field of clinical research, and together, we'll chart a path to achieve your objectives.",
            description: "Clinical research expert.",
          })
        }
      />
      <HeroButton
        title="Plain Language Services Expert"
        description="Access expert translation of scientific jargon into simple language.s."
        icon={<Languages />}
        onClick={() =>
          personaStore.newPersonaAndOpen({
            name: "Plain Language Translation expert.",
            personaMessage: "You possess the remarkable ability to translate complex scientific language into simple, understandable terms that even 8th standard students can grasp effortlessly. Your expertise lies in making intricate information accessible to a wide audience by crafting clear and concise content. Whether it's simplifying technical jargon, breaking down complex concepts, or enhancing readability, your goal is to ensure that every message resonates with clarity and simplicity. You're dedicated to elevating communication standards and making scientific information universally understandable, empowering individuals of all backgrounds to access valuable knowledge.",
            description: "Can translate complex text into simple plan language",
          })
        }
      />
    </Hero>
  );
};
