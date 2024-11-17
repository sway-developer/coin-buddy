"use client";

import { z } from "zod";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { configurationSchema } from "../schema/configuration-schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { updateCurrencyAction } from "../actions/configuration-actions";
import { toast } from "sonner";

export default function ConfigurationForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof configurationSchema>>({
    resolver: zodResolver(configurationSchema),
  });

  const updateCurrency = useMutation({
    mutationFn: (currency: string) => updateCurrencyAction(currency),

    onSuccess: () => {
      toast.success("Тип валюты успешно обновлен");
      router.push("/dashboard");
    },
  });

  const onFormSubmit = ({ currency }: z.infer<typeof configurationSchema>) => {
    updateCurrency.mutate(currency);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onFormSubmit)}
        className="flex flex-col gap-4 w-full"
      >
        <FormField
          control={form.control}
          name="currency"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Тип валюты</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите тип валюты для ваших транзакций" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="BYN">BYN Белорусский рубль</SelectItem>
                  <SelectItem value="RUB">RUB Российский рубль</SelectItem>
                  <SelectItem value="USD">USD Американский доллар</SelectItem>
                  <SelectItem value="EUR">EUR Евро</SelectItem>
                  <SelectItem value="JPY">JPY Японский йен</SelectItem>
                  <SelectItem value="CNY">CNY Китайский юань</SelectItem>
                  <SelectItem value="PLN">PLN Польский злотый</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Сохранить и перейти к панели управления</Button>
      </form>
    </Form>
  );
}
