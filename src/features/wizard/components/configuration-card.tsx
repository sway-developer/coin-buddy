"use client";

import { z } from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { configurationSchema } from "@/features/wizard/schema/configuration-schema";
import ConfigurationForm from "./configuration-form";

export default function ConfigurationCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg tracking-normal font-bold">
          Настройки типа валюты
        </CardTitle>
        <CardDescription>
          Вы можете изменить данные настройки в любой момент.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ConfigurationForm />
      </CardContent>
    </Card>
  );
}
