"use client";

import React, { useState } from "react";
import Modal from "react-modal";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/crazxy-ui/card";
// import { InteractiveHoverButton } from "@/components/ui/magicui/interactive-hover-button";
import { SparklesText } from "@/components/ui/magicui/sparkles-text";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import Image from "next/image";

interface CertificateCardProps {
  title: string;
  description: string;
  image: string;
  href?: string;
  className?: string;
}

export default function CertificateCard({
  title,
  description,
  image,
//   href,
  className,
}: CertificateCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleImageError = () => {
    // Silently use the placeholder image when original fails
    setImageError(true);
  };

  return (
    <Card
      variant="plus"
      className={cn(
        "relative w-full max-w-sm p-4 rounded-xl shadow-sm hover:shadow-md transition-all border border-muted bg-background",
        className
      )}
    >
      <GlowingEffect
        spread={40}
        glow
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />

      <div
        className="rounded-lg overflow-hidden mb-4 cursor-pointer relative group"
        onClick={openModal}>
        <Image
          src={imageError ? "/placeholder.png" : image}
          alt={title}
          onError={handleImageError}
          width={600}
          height={400}
          className="w-full h-full object-cover rounded-lg border"
        />
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            padding: 0,
            border: "none",
            background: "none",
            maxWidth: "90vw",
            maxHeight: "90vh",
            overflow: "hidden",
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            zIndex: 9999,
          },
        }} >
        <Image
          src={imageError ? "/placeholder.png" : image}
          alt="Fullscreen certificate"
          width={1600}
          height={1000}
          className="object-contain max-w-full max-h-full rounded-lg cursor-pointer"
          onClick={closeModal}
        />
      </Modal>

      <div className="flex items-center justify-between">
        <SparklesText className="text-lg font-semibold">{title}</SparklesText>
      </div>

      <p className="text-sm text-muted-foreground mt-2">{description}</p>

      {/* <div className="pt-6">
        <InteractiveHoverButton onClick={openModal}>
          View Certificate
        </InteractiveHoverButton>
      </div> */}
    </Card>
  );
}
