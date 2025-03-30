"use client";

import { Link, Copy } from "lucide-react";

import { IconButton } from "@/components/icon-button";
import { InputRoot, InputIcon, InputField } from "@/components/input";

interface InviteLinkInputProps {
  inviteLink: string;
}

export function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
  function copyInviteLink() {
    navigator.clipboard.writeText(inviteLink);
    console.log("Invite link copied to clipboard");
  }

  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>
      <InputField defaultValue={inviteLink} readOnly />

      <IconButton className="-mr-2" onClick={copyInviteLink}>
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  );
}
