"use client";

import * as stylex from "@stylexjs/stylex";
import { CircleAlert } from "lucide-react";
import { useState, type ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@stylexcn/components/accordion";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@stylexcn/components/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@stylexcn/components/alert-dialog";
import { AspectRatio } from "@stylexcn/components/aspect-ratio";
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "@stylexcn/components/avatar";
import { Badge, type BadgeVariant } from "@stylexcn/components/badge";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@stylexcn/components/breadcrumb";
import { Button, type ButtonSize, type ButtonVariant } from "@stylexcn/components/button";
import { ButtonGroup } from "@stylexcn/components/button-group";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@stylexcn/components/card";
import { Checkbox } from "@stylexcn/components/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@stylexcn/components/collapsible";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@stylexcn/components/context-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@stylexcn/components/dialog";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@stylexcn/components/dropdown-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@stylexcn/components/hover-card";
import { Input } from "@stylexcn/components/input";
import { Kbd, KbdGroup } from "@stylexcn/components/kbd";
import { Label } from "@stylexcn/components/label";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@stylexcn/components/menubar";
import {
  NativeSelect,
  NativeSelectOption,
} from "@stylexcn/components/native-select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@stylexcn/components/pagination";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@stylexcn/components/popover";
import { Progress } from "@stylexcn/components/progress";
import { RadioGroup, RadioGroupItem } from "@stylexcn/components/radio-group";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@stylexcn/components/resizable";
import { ScrollArea, ScrollBar } from "@stylexcn/components/scroll-area";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@stylexcn/components/select";
import { Separator } from "@stylexcn/components/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  type SheetSide,
} from "@stylexcn/components/sheet";
import { Skeleton } from "@stylexcn/components/skeleton";
import { Slider } from "@stylexcn/components/slider";
import { Spinner } from "@stylexcn/components/spinner";
import { Switch } from "@stylexcn/components/switch";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@stylexcn/components/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@stylexcn/components/tabs";
import { Textarea } from "@stylexcn/components/textarea";
import { Toggle } from "@stylexcn/components/toggle";
import { ToggleGroup, ToggleGroupItem } from "@stylexcn/components/toggle-group";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@stylexcn/components/tooltip";
import { chrome } from "./chrome.stylex";

const BUTTON_VARIANTS: ButtonVariant[] = [
  "default",
  "destructive",
  "outline",
  "secondary",
  "ghost",
  "link",
];
const BUTTON_SIZES: ButtonSize[] = ["default", "sm", "lg", "icon"];
const BADGE_VARIANTS: BadgeVariant[] = [
  "default",
  "secondary",
  "destructive",
  "outline",
  "ghost",
  "link",
];

function DemoFrame({ children }: { children: ReactNode }) {
  return <div {...stylex.props(chrome.demo)}>{children}</div>;
}

function AccordionDemo() {
  return (
    <div {...stylex.props(chrome.well)}>
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that match the other components.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

function AlertDemo() {
  return (
    <div {...stylex.props(chrome.stack)}>
      <Alert>
        <AlertTitle>Heads up</AlertTitle>
        <AlertDescription>You can add components to your app.</AlertDescription>
      </Alert>
      <Alert>
        <CircleAlert />
        <AlertTitle>Heads up</AlertTitle>
        <AlertDescription>You can add components to your app.</AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <CircleAlert />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Your session has expired.</AlertDescription>
      </Alert>
    </div>
  );
}

function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Open alert dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

function AspectRatioDemo() {
  return (
    <div {...stylex.props(chrome.well)}>
      <AspectRatio ratio={16 / 9}>
        <div {...stylex.props(chrome.aspectFill)} />
      </AspectRatio>
    </div>
  );
}

function AvatarDemo() {
  return (
    <div {...stylex.props(chrome.row)}>
      <Avatar>
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar size="sm">
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>CN</AvatarFallback>
        <AvatarBadge />
      </Avatar>
      <AvatarGroup>
        <Avatar>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>2</AvatarGroupCount>
      </AvatarGroup>
    </div>
  );
}

function BadgeDemo() {
  return (
    <div {...stylex.props(chrome.row)}>
      {BADGE_VARIANTS.map((variant) => (
        <Badge key={variant} variant={variant}>
          {variant}
        </Badge>
      ))}
    </div>
  );
}

function BreadcrumbDemo() {
  return (
    <div {...stylex.props(chrome.stack)}>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbEllipsis />
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}

function ButtonDemo() {
  return (
    <div {...stylex.props(chrome.stack)}>
      {BUTTON_VARIANTS.map((variant) => (
        <div key={variant} {...stylex.props(chrome.row)}>
          {BUTTON_SIZES.map((size) => (
            <Button key={size} variant={variant} size={size}>
              {size === "icon" ? "→" : variant}
            </Button>
          ))}
          <Button variant={variant} disabled>
            Disabled
          </Button>
        </div>
      ))}
    </div>
  );
}

function ButtonGroupDemo() {
  return (
    <div {...stylex.props(chrome.stack)}>
      <ButtonGroup>
        <Button variant="outline">Copy</Button>
        <Button variant="outline">Paste</Button>
        <Button variant="outline">Cut</Button>
      </ButtonGroup>
      <ButtonGroup orientation="vertical">
        <Button variant="outline">Top</Button>
        <Button variant="outline">Middle</Button>
        <Button variant="outline">Bottom</Button>
      </ButtonGroup>
    </div>
  );
}

function CardDemo() {
  return (
    <div {...stylex.props(chrome.row)}>
      <div {...stylex.props(chrome.well)}>
        <Card>
          <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            A short body of copy that wraps at this width.
          </CardContent>
          <CardFooter>Need help?</CardFooter>
        </Card>
      </div>
      <div {...stylex.props(chrome.well)}>
        <Card>
          <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
            <CardAction>
              <Button variant="outline" size="sm">
                Action
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            A short body of copy that wraps at this width.
          </CardContent>
          <CardFooter>Need help?</CardFooter>
        </Card>
      </div>
    </div>
  );
}

function CheckboxDemo() {
  return (
    <div {...stylex.props(chrome.stack)}>
      <div {...stylex.props(chrome.checkRow)}>
        <Checkbox id="docs-cb" />
        <Label htmlFor="docs-cb">Accept terms</Label>
      </div>
      <div {...stylex.props(chrome.checkRow)}>
        <Checkbox defaultChecked id="docs-cb-on" />
        <Label htmlFor="docs-cb-on">Checked</Label>
      </div>
      <div {...stylex.props(chrome.checkRow)}>
        <Checkbox disabled id="docs-cb-off" />
        <Label htmlFor="docs-cb-off">Disabled</Label>
      </div>
      <div {...stylex.props(chrome.checkRow)}>
        <Checkbox aria-invalid id="docs-cb-bad" />
        <Label htmlFor="docs-cb-bad">Invalid</Label>
      </div>
    </div>
  );
}

function CollapsibleDemo() {
  const [open, setOpen] = useState(true);
  return (
    <div {...stylex.props(chrome.well)}>
      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger asChild>
          <Button variant="outline">Can I use this?</Button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          Yes. Free to use for personal and commercial projects. No attribution
          required.
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}

function ContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger {...stylex.props(chrome.contextTrigger)}>
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Back</ContextMenuItem>
        <ContextMenuItem>Forward</ContextMenuItem>
        <ContextMenuItem>
          Reload
          <ContextMenuShortcut>⌘R</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Save Page As…</ContextMenuItem>
        <ContextMenuItem>Print</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}

function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you are done.
          </DialogDescription>
        </DialogHeader>
        <div {...stylex.props(chrome.field)}>
          <Label htmlFor="dialog-name">Name</Label>
          <Input id="dialog-name" defaultValue="Ada Lovelace" />
        </div>
        <DialogFooter>
          <Button>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked>Status Bar</DropdownMenuCheckboxItem>
        <DropdownMenuRadioGroup value="bottom">
          <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="outline">@ada</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div>Ada Lovelace</div>
        <div {...stylex.props(chrome.muted)}>@ada</div>
      </HoverCardContent>
    </HoverCard>
  );
}

function InputDemo() {
  return (
    <div {...stylex.props(chrome.row)}>
      <div {...stylex.props(chrome.field)}>
        <Label htmlFor="docs-email">Email</Label>
        <Input id="docs-email" placeholder="Email" />
      </div>
      <div {...stylex.props(chrome.field)}>
        <Label htmlFor="docs-email-off">Disabled</Label>
        <Input id="docs-email-off" defaultValue="Email" disabled />
      </div>
      <div {...stylex.props(chrome.field)}>
        <Label htmlFor="docs-email-bad">Invalid</Label>
        <Input id="docs-email-bad" defaultValue="Email" aria-invalid />
      </div>
    </div>
  );
}

function KbdDemo() {
  return (
    <div {...stylex.props(chrome.row)}>
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>⇧</Kbd>
        <Kbd>P</Kbd>
      </KbdGroup>
    </div>
  );
}

function LabelDemo() {
  return (
    <div {...stylex.props(chrome.field)}>
      <Label htmlFor="docs-label-email">Email</Label>
      <Input id="docs-label-email" defaultValue="ada@example.com" />
    </div>
  );
}

function MenubarDemo() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New Tab</MenubarItem>
          <MenubarItem>New Window</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Share</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Print</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Undo</MenubarItem>
          <MenubarItem>Redo</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Reload</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}

function NativeSelectDemo() {
  return (
    <div {...stylex.props(chrome.row)}>
      <NativeSelect defaultValue="apple">
        <NativeSelectOption value="apple">Apple</NativeSelectOption>
        <NativeSelectOption value="banana">Banana</NativeSelectOption>
        <NativeSelectOption value="blueberry">Blueberry</NativeSelectOption>
      </NativeSelect>
      <NativeSelect size="sm" defaultValue="apple">
        <NativeSelectOption value="apple">Apple</NativeSelectOption>
        <NativeSelectOption value="banana">Banana</NativeSelectOption>
      </NativeSelect>
      <NativeSelect disabled defaultValue="apple">
        <NativeSelectOption value="apple">Apple</NativeSelectOption>
      </NativeSelect>
    </div>
  );
}

function PaginationDemo() {
  return (
    <div {...stylex.props(chrome.stack)}>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              9
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">10</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>Dimensions</PopoverTitle>
          <PopoverDescription>
            Set the dimensions for the layer.
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  );
}

function ProgressDemo() {
  return (
    <div {...stylex.props(chrome.stack, chrome.well)}>
      <Progress value={0} />
      <Progress value={60} />
      <Progress value={100} />
    </div>
  );
}

function RadioGroupDemo() {
  return (
    <div {...stylex.props(chrome.stack)}>
      <RadioGroup defaultValue="one">
        <div {...stylex.props(chrome.checkRow)}>
          <RadioGroupItem value="one" id="docs-rg-1" />
          <Label htmlFor="docs-rg-1">One</Label>
        </div>
        <div {...stylex.props(chrome.checkRow)}>
          <RadioGroupItem value="two" id="docs-rg-2" />
          <Label htmlFor="docs-rg-2">Two</Label>
        </div>
      </RadioGroup>
      <div {...stylex.props(chrome.checkRow)}>
        <RadioGroup>
          <RadioGroupItem value="off" disabled id="docs-rg-off" />
        </RadioGroup>
        <Label htmlFor="docs-rg-off">Disabled</Label>
      </div>
    </div>
  );
}

function ResizableDemo() {
  return (
    <div {...stylex.props(chrome.stack)}>
      <div {...stylex.props(chrome.resizableH)}>
        <ResizablePanelGroup orientation="horizontal">
          <ResizablePanel defaultSize={50}>
            <div {...stylex.props(chrome.resizableFill)}>One</div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50}>
            <div {...stylex.props(chrome.resizableFill)}>Two</div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      <div {...stylex.props(chrome.resizableV)}>
        <ResizablePanelGroup orientation="vertical">
          <ResizablePanel defaultSize={50}>
            <div {...stylex.props(chrome.resizableFill)}>One</div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50}>
            <div {...stylex.props(chrome.resizableFill)}>Two</div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}

const SCROLL_TAGS = Array.from({ length: 20 }, (_, i) =>
  `Tag ${String(i + 1).padStart(2, "0")}`,
);

function ScrollAreaDemo() {
  return (
    <div {...stylex.props(chrome.row)}>
      <div {...stylex.props(chrome.scrollV)}>
        <ScrollArea type="always">
          <div {...stylex.props(chrome.scrollList)}>
            {SCROLL_TAGS.map((tag) => (
              <div key={tag} {...stylex.props(chrome.scrollItem)}>
                {tag}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
      <div {...stylex.props(chrome.scrollH)}>
        <ScrollArea type="always">
          <div {...stylex.props(chrome.scrollStrip)}>
            {SCROLL_TAGS.map((tag) => (
              <div key={tag} {...stylex.props(chrome.scrollBlock)} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
}

function SelectDemo() {
  const options = (
    <>
      <SelectGroup>
        <SelectLabel>Fruits</SelectLabel>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
      </SelectGroup>
      <SelectSeparator />
      <SelectGroup>
        <SelectLabel>Vegetables</SelectLabel>
        <SelectItem value="carrot">Carrot</SelectItem>
        <SelectItem value="broccoli">Broccoli</SelectItem>
      </SelectGroup>
    </>
  );

  return (
    <div {...stylex.props(chrome.row)}>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent position="popper">{options}</SelectContent>
      </Select>
      <Select>
        <SelectTrigger size="sm">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent position="popper">{options}</SelectContent>
      </Select>
    </div>
  );
}

function SeparatorDemo() {
  return (
    <div {...stylex.props(chrome.row)}>
      <div {...stylex.props(chrome.separatorH)}>
        <Separator />
      </div>
      <div {...stylex.props(chrome.separatorV)}>
        <Separator orientation="vertical" />
      </div>
    </div>
  );
}

function SheetDemo() {
  const sides: SheetSide[] = ["right", "left", "top", "bottom"];
  return (
    <div {...stylex.props(chrome.row)}>
      {sides.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="outline">{side}</Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you are done.
              </SheetDescription>
            </SheetHeader>
            <p>This is the sheet body.</p>
            <SheetFooter>
              <Button>Save changes</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}

function SkeletonDemo() {
  return (
    <div {...stylex.props(chrome.row)}>
      <div {...stylex.props(chrome.skeletonBar)}>
        <Skeleton />
      </div>
      <div {...stylex.props(chrome.skeletonCircle)}>
        <Skeleton radius="full" />
      </div>
    </div>
  );
}

function SliderDemo() {
  const [single, setSingle] = useState([50]);
  const [range, setRange] = useState([25, 75]);
  return (
    <div {...stylex.props(chrome.stack, chrome.well)}>
      <Slider value={single} onValueChange={setSingle} />
      <Slider value={range} onValueChange={setRange} />
      <Slider value={[50]} disabled onValueChange={() => {}} />
    </div>
  );
}

function SpinnerDemo() {
  return (
    <div {...stylex.props(chrome.row)}>
      <Spinner size="3" />
      <Spinner size="4" />
      <Spinner size="6" />
      <Spinner size="8" />
      <Button>
        <Spinner size="4" />
        Please wait
      </Button>
    </div>
  );
}

function SwitchDemo() {
  return (
    <div {...stylex.props(chrome.stack)}>
      <div {...stylex.props(chrome.checkRow)}>
        <Switch id="docs-sw" />
        <Label htmlFor="docs-sw">Airplane mode</Label>
      </div>
      <div {...stylex.props(chrome.checkRow)}>
        <Switch defaultChecked id="docs-sw-on" />
        <Label htmlFor="docs-sw-on">Checked</Label>
      </div>
      <div {...stylex.props(chrome.checkRow)}>
        <Switch disabled id="docs-sw-off" />
        <Label htmlFor="docs-sw-off">Disabled</Label>
      </div>
    </div>
  );
}

const INVOICES = [
  { invoice: "INV001", status: "Paid", method: "Credit Card", amount: "$250.00" },
  { invoice: "INV002", status: "Pending", method: "PayPal", amount: "$150.00" },
  { invoice: "INV003", status: "Unpaid", method: "Bank Transfer", amount: "$350.00" },
] as const;

function TableDemo() {
  return (
    <div {...stylex.props(chrome.wideWell)}>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead {...stylex.props(chrome.tableAmount)}>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {INVOICES.map((row) => (
            <TableRow key={row.invoice}>
              <TableCell {...stylex.props(chrome.tableStrong)}>
                {row.invoice}
              </TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.method}</TableCell>
              <TableCell {...stylex.props(chrome.tableAmount)}>
                {row.amount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell {...stylex.props(chrome.tableAmount)}>$750.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}

function TabsDemo() {
  return (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Make changes to your account here.</TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  );
}

function TextareaDemo() {
  return (
    <div {...stylex.props(chrome.row)}>
      <div {...stylex.props(chrome.field)}>
        <Label htmlFor="docs-ta">Message</Label>
        <Textarea id="docs-ta" placeholder="Type your message" />
      </div>
      <div {...stylex.props(chrome.field)}>
        <Label htmlFor="docs-ta-off">Disabled</Label>
        <Textarea id="docs-ta-off" defaultValue="Email" disabled />
      </div>
      <div {...stylex.props(chrome.field)}>
        <Label htmlFor="docs-ta-bad">Invalid</Label>
        <Textarea id="docs-ta-bad" defaultValue="Email" aria-invalid />
      </div>
    </div>
  );
}

function ToggleDemo() {
  return (
    <div {...stylex.props(chrome.row)}>
      <Toggle>Italic</Toggle>
      <Toggle defaultPressed>Italic</Toggle>
      <Toggle variant="outline">Italic</Toggle>
      <Toggle size="sm">Italic</Toggle>
      <Toggle size="lg">Italic</Toggle>
      <Toggle disabled>Italic</Toggle>
    </div>
  );
}

function ToggleGroupDemo() {
  return (
    <div {...stylex.props(chrome.stack)}>
      <ToggleGroup type="single" defaultValue="bold">
        <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
        <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
        <ToggleGroupItem value="underline">Underline</ToggleGroupItem>
      </ToggleGroup>
      <ToggleGroup type="single" defaultValue="bold" variant="outline">
        <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
        <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
        <ToggleGroupItem value="underline">Underline</ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}

function TooltipDemo() {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>Add to library</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

const DEMOS: Record<string, () => ReactNode> = {
  accordion: AccordionDemo,
  alert: AlertDemo,
  "alert-dialog": AlertDialogDemo,
  "aspect-ratio": AspectRatioDemo,
  avatar: AvatarDemo,
  badge: BadgeDemo,
  breadcrumb: BreadcrumbDemo,
  button: ButtonDemo,
  "button-group": ButtonGroupDemo,
  card: CardDemo,
  checkbox: CheckboxDemo,
  collapsible: CollapsibleDemo,
  "context-menu": ContextMenuDemo,
  dialog: DialogDemo,
  "dropdown-menu": DropdownMenuDemo,
  "hover-card": HoverCardDemo,
  input: InputDemo,
  kbd: KbdDemo,
  label: LabelDemo,
  menubar: MenubarDemo,
  "native-select": NativeSelectDemo,
  pagination: PaginationDemo,
  popover: PopoverDemo,
  progress: ProgressDemo,
  "radio-group": RadioGroupDemo,
  resizable: ResizableDemo,
  "scroll-area": ScrollAreaDemo,
  select: SelectDemo,
  separator: SeparatorDemo,
  sheet: SheetDemo,
  skeleton: SkeletonDemo,
  slider: SliderDemo,
  spinner: SpinnerDemo,
  switch: SwitchDemo,
  table: TableDemo,
  tabs: TabsDemo,
  textarea: TextareaDemo,
  toggle: ToggleDemo,
  "toggle-group": ToggleGroupDemo,
  tooltip: TooltipDemo,
};

export function ComponentDemo({ slug }: { slug: string }) {
  const Demo = DEMOS[slug];
  if (!Demo) return null;
  return (
    <DemoFrame>
      <Demo />
    </DemoFrame>
  );
}
