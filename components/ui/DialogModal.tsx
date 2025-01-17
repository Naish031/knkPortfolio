"use client";
import { Dialog as DialogUI, Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";
import { Button } from "./button";

interface DialogModalProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
}

export function DialogModal({
  title,
  description,
  isOpen,
  onClose,
}: DialogModalProps) {
  return (
    <Transition show={isOpen} as={Fragment}>
      <DialogUI as="div" className="relative z-50" onClose={onClose}>
        {/* Overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-30" />
        </Transition.Child>

        {/* Dialog Content */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogUI.Panel className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
              {/* Title */}
              <DialogUI.Title className="text-xl lg:text-3xl font-medium  text-gray-900">
                {title}
              </DialogUI.Title>

              {/* Description */}
              <DialogUI.Description className="mt-2 text-base text-gray-500">
                {description}
              </DialogUI.Description>

              {/* Close Button */}
              <div className="mt-8">
                <Button variant="default" onClick={onClose} className="w-full">
                  Close
                </Button>
              </div>
            </DialogUI.Panel>
          </Transition.Child>
        </div>
      </DialogUI>
    </Transition>
  );
}
