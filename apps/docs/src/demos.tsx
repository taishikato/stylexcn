"use client";

import * as stylex from "@stylexjs/stylex";
import {
  Calculator,
  Calendar as CalendarIcon,
  CircleAlert,
  CreditCard,
  Home,
  Inbox,
  Search,
  Settings,
  Smile,
  User,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import { type DateRange } from "react-day-picker";
import { enUS } from "react-day-picker/locale";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
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
import { Calendar } from "@stylexcn/components/calendar";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@stylexcn/components/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@stylexcn/components/carousel";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@stylexcn/components/chart";
import { Checkbox } from "@stylexcn/components/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@stylexcn/components/collapsible";
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "@stylexcn/components/combobox";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@stylexcn/components/command";
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
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  type DrawerDirection,
} from "@stylexcn/components/drawer";
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
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@stylexcn/components/empty";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@stylexcn/components/field";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@stylexcn/components/hover-card";
import { Input } from "@stylexcn/components/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@stylexcn/components/input-group";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@stylexcn/components/input-otp";
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
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@stylexcn/components/navigation-menu";
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
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@stylexcn/components/sidebar";
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

/* Pin month/today so the preview does not drift with the current date. */
const CALENDAR_TODAY = new Date(2024, 5, 15);
const CALENDAR_MONTH = new Date(2024, 5, 1);
const CALENDAR_SELECTED = new Date(2024, 5, 10);
const CALENDAR_RANGE = {
  from: new Date(2024, 5, 10),
  to: new Date(2024, 5, 18),
};

function CalendarDemo() {
  const [date, setDate] = useState<Date | undefined>(CALENDAR_SELECTED);
  const [range, setRange] = useState<DateRange | undefined>(CALENDAR_RANGE);

  return (
    <div {...stylex.props(chrome.stack)}>
      <Calendar
        mode="single"
        locale={enUS}
        today={CALENDAR_TODAY}
        defaultMonth={CALENDAR_MONTH}
        selected={date}
        onSelect={setDate}
      />
      <Calendar
        mode="range"
        locale={enUS}
        today={CALENDAR_TODAY}
        defaultMonth={CALENDAR_MONTH}
        selected={range}
        onSelect={setRange}
      />
    </div>
  );
}

/* Pin Embla index and disable drag/tween so the preview does not drift. */
const CAROUSEL_OPTS = {
  watchDrag: false as const,
  duration: 0,
  startIndex: 0,
};

function CarouselDemo() {
  return (
    <div {...stylex.props(chrome.carouselStage)}>
      <Carousel opts={CAROUSEL_OPTS} {...stylex.props(chrome.carouselShell)}>
        <CarouselContent>
          {[1, 2, 3, 4, 5].map((n) => (
            <CarouselItem key={n}>
              <div {...stylex.props(chrome.carouselPad)}>
                <Card>
                  <CardContent {...stylex.props(chrome.carouselSlideFace)}>
                    <span {...stylex.props(chrome.carouselSlideLabel)}>{n}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

/* Pin series values and disable animation so the preview does not drift. */
const CHART_DATA = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

const CHART_CONFIG = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

function ChartDemo() {
  return (
    <div {...stylex.props(chrome.chartWell)}>
      <ChartContainer config={CHART_CONFIG} {...stylex.props(chrome.chartSize)}>
        <BarChart accessibilityLayer data={CHART_DATA}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            isAnimationActive={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Bar
            dataKey="desktop"
            fill="var(--color-desktop)"
            radius={8}
            isAnimationActive={false}
          />
        </BarChart>
      </ChartContainer>
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

const COMBOBOX_FRAMEWORKS = [
  "Next.js",
  "SvelteKit",
  "Nuxt.js",
  "Remix",
  "Astro",
];

function ComboboxDemo() {
  const chipAnchor = useComboboxAnchor();

  return (
    <div {...stylex.props(chrome.stack)}>
      <div {...stylex.props(chrome.field)}>
        <Label>Framework</Label>
        <Combobox items={COMBOBOX_FRAMEWORKS}>
          <ComboboxInput placeholder="Select a framework" />
          <ComboboxContent>
            <ComboboxEmpty>No items found.</ComboboxEmpty>
            <ComboboxList>
              {(item: string) => (
                <ComboboxItem key={item} value={item}>
                  {item}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </div>
      <div {...stylex.props(chrome.field)}>
        <Label>Frameworks</Label>
        <Combobox
          multiple
          items={COMBOBOX_FRAMEWORKS}
          defaultValue={[COMBOBOX_FRAMEWORKS[0]]}
        >
          <ComboboxChips ref={chipAnchor}>
            <ComboboxValue>
              {(values: string[]) => (
                <>
                  {values.map((value) => (
                    <ComboboxChip key={value}>{value}</ComboboxChip>
                  ))}
                  <ComboboxChipsInput placeholder="Add a framework" />
                </>
              )}
            </ComboboxValue>
          </ComboboxChips>
          <ComboboxContent anchor={chipAnchor}>
            <ComboboxEmpty>No items found.</ComboboxEmpty>
            <ComboboxList>
              {(item: string) => (
                <ComboboxItem key={item} value={item}>
                  {item}
                </ComboboxItem>
              )}
            </ComboboxList>
          </ComboboxContent>
        </Combobox>
      </div>
    </div>
  );
}

function CommandMenu({ onSelect }: { onSelect?: (value: string) => void }) {
  return (
    <>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem value="calendar" onSelect={onSelect}>
            <CalendarIcon />
            Calendar
          </CommandItem>
          <CommandItem value="emoji" onSelect={onSelect}>
            <Smile />
            Search Emoji
          </CommandItem>
          <CommandItem value="calculator" onSelect={onSelect}>
            <Calculator />
            Calculator
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem value="profile" onSelect={onSelect}>
            <User />
            Profile
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem value="billing" onSelect={onSelect}>
            <CreditCard />
            Billing
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem value="settings" onSelect={onSelect}>
            <Settings />
            Settings
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </>
  );
}

function CommandDemo() {
  const [selected, setSelected] = useState("calendar");
  const [open, setOpen] = useState(false);

  return (
    <div {...stylex.props(chrome.stack)}>
      <div {...stylex.props(chrome.commandWell)}>
        <Command>
          <CommandMenu onSelect={setSelected} />
        </Command>
      </div>
      <p {...stylex.props(chrome.muted)}>Selected: {selected}</p>
      <div>
        <Button variant="outline" onClick={() => setOpen(true)}>
          Open command
        </Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandMenu
            onSelect={(value) => {
              setSelected(value);
              setOpen(false);
            }}
          />
        </CommandDialog>
      </div>
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

function DrawerDemo() {
  const directions: DrawerDirection[] = ["bottom", "left", "right", "top"];
  return (
    <div {...stylex.props(chrome.row)}>
      {directions.map((direction) => (
        <Drawer key={direction} direction={direction}>
          <DrawerTrigger asChild>
            <Button variant="outline">{direction}</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Edit profile</DrawerTitle>
              <DrawerDescription>
                Make changes to your profile here. Click save when you are done.
              </DrawerDescription>
            </DrawerHeader>
            <p>This is the drawer body.</p>
            <DrawerFooter>
              <Button>Save changes</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ))}
    </div>
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

function EmptyDemo() {
  return (
    <div {...stylex.props(chrome.stack)}>
      <Empty>
        <EmptyHeader>
          <EmptyMedia>
            <Inbox />
          </EmptyMedia>
          <EmptyTitle>No messages</EmptyTitle>
          <EmptyDescription>
            You don&apos;t have any messages yet.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Inbox />
          </EmptyMedia>
          <EmptyTitle>No messages</EmptyTitle>
          <EmptyDescription>
            You don&apos;t have any messages yet.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button>Send a message</Button>
        </EmptyContent>
      </Empty>
    </div>
  );
}

function FieldDemo() {
  return (
    <div {...stylex.props(chrome.stack)}>
      <div {...stylex.props(chrome.well)}>
        <FieldSet>
          <FieldLegend>Account</FieldLegend>
          <FieldDescription>
            Type into the inputs. Required fields show an error below.
          </FieldDescription>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="docs-field-name">Name</FieldLabel>
              <Input id="docs-field-name" placeholder="Ada Lovelace" />
              <FieldDescription>Shown on your public profile.</FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="docs-field-email">Email</FieldLabel>
              <Input id="docs-field-email" placeholder="ada@example.com" />
            </Field>
            <Field data-invalid="true">
              <FieldLabel htmlFor="docs-field-bad">Username</FieldLabel>
              <Input
                id="docs-field-bad"
                defaultValue="ada"
                aria-invalid
              />
              <FieldError errors={[{ message: "This username is taken." }]} />
            </Field>
          </FieldGroup>
        </FieldSet>
      </div>
      <div {...stylex.props(chrome.well)}>
        <FieldGroup>
          <Field orientation="horizontal">
            <Checkbox id="docs-field-terms" />
            <FieldLabel htmlFor="docs-field-terms">
              Accept terms and conditions
            </FieldLabel>
          </Field>
          <FieldSeparator>Or choose a plan</FieldSeparator>
          <RadioGroup defaultValue="starter">
            <FieldLabel htmlFor="docs-field-starter">
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldTitle>Starter</FieldTitle>
                  <FieldDescription>For personal projects.</FieldDescription>
                </FieldContent>
                <RadioGroupItem value="starter" id="docs-field-starter" />
              </Field>
            </FieldLabel>
            <FieldLabel htmlFor="docs-field-pro">
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldTitle>Pro</FieldTitle>
                  <FieldDescription>For teams that ship weekly.</FieldDescription>
                </FieldContent>
                <RadioGroupItem value="pro" id="docs-field-pro" />
              </Field>
            </FieldLabel>
          </RadioGroup>
        </FieldGroup>
      </div>
    </div>
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

function InputGroupDemo() {
  return (
    <div {...stylex.props(chrome.stack)}>
      <div {...stylex.props(chrome.row)}>
        <div {...stylex.props(chrome.field)}>
          <Label htmlFor="docs-ig-start">Inline start</Label>
          <InputGroup>
            <InputGroupAddon>
              <Search />
            </InputGroupAddon>
            <InputGroupInput id="docs-ig-start" placeholder="Search..." />
          </InputGroup>
        </div>
        <div {...stylex.props(chrome.field)}>
          <Label htmlFor="docs-ig-end">Inline end</Label>
          <InputGroup>
            <InputGroupInput id="docs-ig-end" placeholder="example" />
            <InputGroupAddon align="inline-end">
              <InputGroupText>.com</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
      <div {...stylex.props(chrome.row)}>
        <div {...stylex.props(chrome.field)}>
          <Label htmlFor="docs-ig-text">Text addons</Label>
          <InputGroup>
            <InputGroupAddon>
              <InputGroupText>$</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput id="docs-ig-text" placeholder="0.00" />
            <InputGroupAddon align="inline-end">
              <InputGroupText>.com</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </div>
        <div {...stylex.props(chrome.field)}>
          <Label htmlFor="docs-ig-button">Button</Label>
          <InputGroup>
            <InputGroupInput id="docs-ig-button" placeholder="Search docs..." />
            <InputGroupAddon align="inline-end">
              <InputGroupButton>Search</InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
      <div {...stylex.props(chrome.row)}>
        <div {...stylex.props(chrome.field)}>
          <Label htmlFor="docs-ig-kbd">Kbd</Label>
          <InputGroup>
            <InputGroupInput id="docs-ig-kbd" placeholder="Search..." />
            <InputGroupAddon align="inline-end">
              <Kbd>⌘</Kbd>
              <Kbd>K</Kbd>
            </InputGroupAddon>
          </InputGroup>
        </div>
        <div {...stylex.props(chrome.field)}>
          <Label htmlFor="docs-ig-off">Disabled</Label>
          <InputGroup data-disabled="true">
            <InputGroupAddon>
              <InputGroupText>$</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput id="docs-ig-off" defaultValue="10.00" disabled />
          </InputGroup>
        </div>
        <div {...stylex.props(chrome.field)}>
          <Label htmlFor="docs-ig-bad">Invalid</Label>
          <InputGroup>
            <InputGroupAddon>
              <InputGroupText>$</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput id="docs-ig-bad" defaultValue="-1" aria-invalid />
          </InputGroup>
        </div>
      </div>
      <div {...stylex.props(chrome.field)}>
        <Label htmlFor="docs-ig-ta">Textarea</Label>
        <InputGroup>
          <InputGroupTextarea
            id="docs-ig-ta"
            placeholder="Write a short update..."
          />
          <InputGroupAddon align="block-end">
            <InputGroupText>0/280</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  );
}

function InputOTPDemo() {
  const [code, setCode] = useState("");
  return (
    <div {...stylex.props(chrome.stack)}>
      <div {...stylex.props(chrome.field)}>
        <Label htmlFor="docs-otp">One-time code</Label>
        <InputOTP
          id="docs-otp"
          maxLength={6}
          value={code}
          onChange={setCode}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <div {...stylex.props(chrome.field)}>
        <Label>With separator</Label>
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <div {...stylex.props(chrome.row)}>
        <div {...stylex.props(chrome.field)}>
          <Label>Disabled</Label>
          <InputOTP maxLength={6} disabled>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <div {...stylex.props(chrome.field)}>
          <Label>Invalid</Label>
          <InputOTP maxLength={6} defaultValue="000000">
            <InputOTPGroup>
              <InputOTPSlot index={0} aria-invalid />
              <InputOTPSlot index={1} aria-invalid />
              <InputOTPSlot index={2} aria-invalid />
              <InputOTPSlot index={3} aria-invalid />
              <InputOTPSlot index={4} aria-invalid />
              <InputOTPSlot index={5} aria-invalid />
            </InputOTPGroup>
          </InputOTP>
        </div>
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

function NavigationMenuDemo() {
  return (
    <div {...stylex.props(chrome.navMenuStage)}>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul {...stylex.props(chrome.navMenuPanel)}>
                <li>
                  <NavigationMenuLink href="#">Introduction</NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink href="#">Installation</NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#">Documentation</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
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

/* Pin expanded so the preview does not read cookies or hop to a sheet. */
const SIDEBAR_ITEMS = [
  { title: "Home", icon: Home, isActive: true },
  { title: "Inbox", icon: Inbox, isActive: false },
  { title: "Calendar", icon: CalendarIcon, isActive: false },
] as const;

function SidebarDemo() {
  return (
    <div {...stylex.props(chrome.sidebarStage)}>
      <SidebarProvider
        open
        onOpenChange={() => {}}
        style={{ minHeight: "100%", height: "100%" }}
      >
        <Sidebar collapsible="none">
          <SidebarHeader>
            <div {...stylex.props(chrome.sidebarBrand)}>Acme Inc</div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Application</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {SIDEBAR_ITEMS.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton isActive={item.isActive}>
                        <item.icon />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
          <header {...stylex.props(chrome.sidebarInsetBar)}>
            <SidebarTrigger />
            Inbox
          </header>
        </SidebarInset>
      </SidebarProvider>
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
  calendar: CalendarDemo,
  card: CardDemo,
  carousel: CarouselDemo,
  chart: ChartDemo,
  checkbox: CheckboxDemo,
  collapsible: CollapsibleDemo,
  combobox: ComboboxDemo,
  command: CommandDemo,
  "context-menu": ContextMenuDemo,
  dialog: DialogDemo,
  drawer: DrawerDemo,
  "dropdown-menu": DropdownMenuDemo,
  empty: EmptyDemo,
  field: FieldDemo,
  "hover-card": HoverCardDemo,
  input: InputDemo,
  "input-group": InputGroupDemo,
  "input-otp": InputOTPDemo,
  kbd: KbdDemo,
  label: LabelDemo,
  menubar: MenubarDemo,
  "native-select": NativeSelectDemo,
  "navigation-menu": NavigationMenuDemo,
  pagination: PaginationDemo,
  popover: PopoverDemo,
  progress: ProgressDemo,
  "radio-group": RadioGroupDemo,
  resizable: ResizableDemo,
  "scroll-area": ScrollAreaDemo,
  select: SelectDemo,
  separator: SeparatorDemo,
  sheet: SheetDemo,
  sidebar: SidebarDemo,
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
