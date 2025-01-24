"use client";

import { useState, ReactNode } from "react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"; // Ajuste o caminho conforme o seu projeto
import { motion } from "framer-motion";

interface WebsiteEmbedWrapperProps {
  children: ReactNode; // Componente a ser clicado
  previewUrl: string; // URL do site a ser exibido
}

export function WebsiteEmbedWrapper({ children, previewUrl }: WebsiteEmbedWrapperProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
            {children}
      </DialogTrigger>

      <DialogContent className="p-0 overflow-hidden  max-w-[90vw] max-h-[90vh]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.4 }}
          className="relative w-full h-full bg-white"
          style={{ height: "100vh", width: "100vw" }}
        >
          {/* Botão de fechar */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 bg-gray-900 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-gray-700 transition"
          >
            ✕
          </button>

          {/* Iframe do site */}
          <iframe
            src={previewUrl}
            className="w-full h-full border-none"
            title="Website Preview"
          />
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
