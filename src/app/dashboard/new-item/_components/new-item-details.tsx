import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { marketplaceCategories } from "@/lib/constants";
import { stringToSlug } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function NewItemSidebar() {
  return (
    <div className="p-4 space-y-10">
      <Link href="/dashboard" className="flex gap-x-2 p-2 w-fit ">
        <ChevronLeft className="size-6 bg-neutral-200 rounded-full" />
        Back
      </Link>
      <form className="grid gap-8">
        <div className="grid gap-2">
          <Label htmlFor="name">Item Name</Label>
          <Input id="name" placeholder="Enter item name" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="category">Category</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              {marketplaceCategories.map((cat) => (
                <SelectItem key={cat.name} value={stringToSlug(cat.name)}>
                  <span>{cat.name}</span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            rows={4}
            placeholder="Describe your item"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="price">Price</Label>
          <Input id="price" type="number" placeholder="Enter an amount" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="image">Upload Image</Label>
          <Input id="image" type="file" multiple />
        </div>
        <Button type="submit">Post Item</Button>
      </form>
    </div>
  );
}
