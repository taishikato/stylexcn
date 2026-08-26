export type ComponentDoc = {
  slug: string;
  name: string;
  description: string;
  usage: string;
};

export const COMPONENTS: ComponentDoc[] = [
  {
    slug: "accordion",
    name: "Accordion",
    description: "A vertically stacked set of headings that reveal related content.",
    usage: `<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>Yes.</AccordionContent>
  </AccordionItem>
</Accordion>`,
  },
  {
    slug: "alert",
    name: "Alert",
    description: "Inline callout for default or destructive messages.",
    usage: `<Alert>
  <AlertTitle>Heads up</AlertTitle>
  <AlertDescription>You can add components to your app.</AlertDescription>
</Alert>`,
  },
  {
    slug: "alert-dialog",
    name: "Alert Dialog",
    description: "A modal for confirming destructive actions.",
    usage: `<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="outline">Open</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>…</AlertDialogContent>
</AlertDialog>`,
  },
  {
    slug: "aspect-ratio",
    name: "Aspect Ratio",
    description: "Constrains content to a ratio. Fill is up to the caller.",
    usage: `<AspectRatio ratio={16 / 9}>
  <div />
</AspectRatio>`,
  },
  {
    slug: "avatar",
    name: "Avatar",
    description: "User image or initials, with sizes, badge, and group.",
    usage: `<Avatar>
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`,
  },
  {
    slug: "badge",
    name: "Badge",
    description: "Small status labels: default, secondary, destructive, outline, ghost, link.",
    usage: `<Badge>Badge</Badge>
<Badge variant="secondary">Secondary</Badge>`,
  },
  {
    slug: "breadcrumb",
    name: "Breadcrumb",
    description: "Trail of links to the current page, with an optional ellipsis.",
    usage: `<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="#">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`,
  },
  {
    slug: "button",
    name: "Button",
    description: "Primary actions across variant and size.",
    usage: `<Button>Button</Button>
<Button variant="outline" size="sm">Outline</Button>`,
  },
  {
    slug: "button-group",
    name: "Button Group",
    description: "Joins related buttons, inputs, or selects into one control.",
    usage: `<ButtonGroup>
  <Button variant="outline">Copy</Button>
  <Button variant="outline">Paste</Button>
</ButtonGroup>`,
  },
  {
    slug: "calendar",
    name: "Calendar",
    description: "A monthly date grid. Pick a day or a range. Month is pinned so the preview does not drift.",
    usage: `<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  month={new Date(2024, 5, 1)}
  today={new Date(2024, 5, 15)}
/>`,
  },
  {
    slug: "card",
    name: "Card",
    description: "Container for header, body, and footer.",
    usage: `<Card>
  <CardHeader>
    <CardTitle>Login to your account</CardTitle>
    <CardDescription>Enter your email below.</CardDescription>
  </CardHeader>
  <CardContent>Body</CardContent>
  <CardFooter>Need help?</CardFooter>
</Card>`,
  },
  {
    slug: "checkbox",
    name: "Checkbox",
    description: "Boolean control with checked, disabled, and invalid states.",
    usage: `<Checkbox id="terms" />
<Label htmlFor="terms">Accept terms</Label>`,
  },
  {
    slug: "collapsible",
    name: "Collapsible",
    description: "Show and hide a panel from a trigger. Chrome is up to you.",
    usage: `<Collapsible>
  <CollapsibleTrigger asChild>
    <Button variant="outline">Toggle</Button>
  </CollapsibleTrigger>
  <CollapsibleContent>Hidden copy</CollapsibleContent>
</Collapsible>`,
  },
  {
    slug: "combobox",
    name: "Combobox",
    description:
      "Autocomplete with a suggestion list. Open, type, select, and chips.",
    usage: `<Combobox items={frameworks}>
  <ComboboxInput placeholder="Select a framework" />
  <ComboboxContent>
    <ComboboxEmpty>No items found.</ComboboxEmpty>
    <ComboboxList>
      {(item) => (
        <ComboboxItem key={item} value={item}>
          {item}
        </ComboboxItem>
      )}
    </ComboboxList>
  </ComboboxContent>
</Combobox>`,
  },
  {
    slug: "command",
    name: "Command",
    description:
      "Command menu for search and quick actions. Type to filter, select an item, or open CommandDialog.",
    usage: `<Command>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>Calendar</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`,
  },
  {
    slug: "context-menu",
    name: "Context Menu",
    description: "Right-click menu. Use the dashed box on the demo page.",
    usage: `<ContextMenu>
  <ContextMenuTrigger>Right click here</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Back</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`,
  },
  {
    slug: "dialog",
    name: "Dialog",
    description: "Centered modal you can open, edit, and close.",
    usage: `<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Open dialog</Button>
  </DialogTrigger>
  <DialogContent>…</DialogContent>
</Dialog>`,
  },
  {
    slug: "drawer",
    name: "Drawer",
    description:
      "A panel that slides in from an edge of the screen. Open bottom, left, right, or top.",
    usage: `<Drawer>
  <DrawerTrigger asChild>
    <Button variant="outline">Open drawer</Button>
  </DrawerTrigger>
  <DrawerContent>…</DrawerContent>
</Drawer>`,
  },
  {
    slug: "dropdown-menu",
    name: "Dropdown Menu",
    description: "Menu from a button, including items, checkboxes, and radios.",
    usage: `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>…</DropdownMenuContent>
</DropdownMenu>`,
  },
  {
    slug: "empty",
    name: "Empty",
    description:
      "Placeholder for a vacant list or page. Media, title, description, and optional action.",
    usage: `<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <Inbox />
    </EmptyMedia>
    <EmptyTitle>No messages</EmptyTitle>
    <EmptyDescription>You don't have any messages yet.</EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <Button>Send a message</Button>
  </EmptyContent>
</Empty>`,
  },
  {
    slug: "field",
    name: "Field",
    description:
      "Compose labels, controls, descriptions, and errors into a form field.",
    usage: `<FieldSet>
  <FieldLegend>Profile</FieldLegend>
  <FieldGroup>
    <Field>
      <FieldLabel htmlFor="email">Email</FieldLabel>
      <Input id="email" placeholder="you@example.com" />
      <FieldDescription>We will not share your email.</FieldDescription>
    </Field>
  </FieldGroup>
</FieldSet>`,
  },
  {
    slug: "hover-card",
    name: "Hover Card",
    description: "Preview card on hover or focus.",
    usage: `<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="outline">@ada</Button>
  </HoverCardTrigger>
  <HoverCardContent>Ada Lovelace</HoverCardContent>
</HoverCard>`,
  },
  {
    slug: "input",
    name: "Input",
    description: "Single-line field. Try typing, disabled, and invalid.",
    usage: `<Input placeholder="Email" />
<Input aria-invalid defaultValue="bad" />`,
  },
  {
    slug: "input-group",
    name: "Input Group",
    description:
      "Input or textarea with inline or block addons: text, icons, buttons, and kbd.",
    usage: `<InputGroup>
  <InputGroupAddon>
    <InputGroupText>$</InputGroupText>
  </InputGroupAddon>
  <InputGroupInput placeholder="0.00" />
  <InputGroupAddon align="inline-end">
    <InputGroupText>.com</InputGroupText>
  </InputGroupAddon>
</InputGroup>`,
  },
  {
    slug: "input-otp",
    name: "Input OTP",
    description:
      "One-time password slots. Type into the group, including a separator.",
    usage: `<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`,
  },
  {
    slug: "kbd",
    name: "Kbd",
    description: "Keyboard shortcut glyphs, alone or grouped.",
    usage: `<KbdGroup>
  <Kbd>⌘</Kbd>
  <Kbd>K</Kbd>
</KbdGroup>`,
  },
  {
    slug: "label",
    name: "Label",
    description: "Caption for a form control. Pair it with Input.",
    usage: `<Label htmlFor="email">Email</Label>
<Input id="email" />`,
  },
  {
    slug: "menubar",
    name: "Menubar",
    description: "Application menu bar. Open File to pick an item.",
    usage: `<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>New Tab</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>`,
  },
  {
    slug: "native-select",
    name: "Native Select",
    description: "Native HTML select with shadcn/ui styling. Default and sm.",
    usage: `<NativeSelect>
  <NativeSelectOption value="apple">Apple</NativeSelectOption>
</NativeSelect>`,
  },
  {
    slug: "navigation-menu",
    name: "Navigation Menu",
    description:
      "A collection of links for site navigation. Open a trigger to show the viewport.",
    usage: `<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
      <NavigationMenuContent>…</NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`,
  },
  {
    slug: "pagination",
    name: "Pagination",
    description: "Page navigation with an active page and ellipsis.",
    usage: `<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>2</PaginationLink>
    </PaginationItem>
  </PaginationContent>
</Pagination>`,
  },
  {
    slug: "popover",
    name: "Popover",
    description: "Floating panel opened from a click.",
    usage: `<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open popover</Button>
  </PopoverTrigger>
  <PopoverContent>…</PopoverContent>
</Popover>`,
  },
  {
    slug: "progress",
    name: "Progress",
    description: "Progress bar at empty, in-progress, and complete.",
    usage: `<Progress value={60} />`,
  },
  {
    slug: "radio-group",
    name: "Radio Group",
    description: "Single-choice radios, including disabled.",
    usage: `<RadioGroup defaultValue="one">
  <RadioGroupItem value="one" id="one" />
  <Label htmlFor="one">One</Label>
</RadioGroup>`,
  },
  {
    slug: "resizable",
    name: "Resizable",
    description: "Split panes. Drag the handle to change the ratio.",
    usage: `<ResizablePanelGroup orientation="horizontal">
  <ResizablePanel defaultSize={50}>One</ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={50}>Two</ResizablePanel>
</ResizablePanelGroup>`,
  },
  {
    slug: "scroll-area",
    name: "Scroll Area",
    description: "Scrollable region. Vertical list and horizontal strip.",
    usage: `<ScrollArea type="always">
  {children}
</ScrollArea>`,
  },
  {
    slug: "select",
    name: "Select",
    description: "Custom dropdown. Open default and sm sizes.",
    usage: `<Select>
  <SelectTrigger>
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
  </SelectContent>
</Select>`,
  },
  {
    slug: "separator",
    name: "Separator",
    description: "Horizontal or vertical divider.",
    usage: `<Separator />
<Separator orientation="vertical" />`,
  },
  {
    slug: "sheet",
    name: "Sheet",
    description: "Edge panel from right, left, top, or bottom.",
    usage: `<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open sheet</Button>
  </SheetTrigger>
  <SheetContent>…</SheetContent>
</Sheet>`,
  },
  {
    slug: "skeleton",
    name: "Skeleton",
    description: "Loading placeholder. Rounded bar and circle.",
    usage: `<Skeleton />
<Skeleton radius="full" />`,
  },
  {
    slug: "slider",
    name: "Slider",
    description: "Numeric slider. Single thumb, range, and disabled.",
    usage: `<Slider defaultValue={[50]} />
<Slider defaultValue={[25, 75]} />`,
  },
  {
    slug: "spinner",
    name: "Spinner",
    description: "Loading indicator at size 3, 4, 6, and 8.",
    usage: `<Spinner />
<Spinner size="8" />`,
  },
  {
    slug: "switch",
    name: "Switch",
    description: "On/off toggle you can click.",
    usage: `<Switch id="airplane" />
<Label htmlFor="airplane">Airplane mode</Label>`,
  },
  {
    slug: "table",
    name: "Table",
    description: "Data table with header, rows, footer, and caption.",
    usage: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Invoice</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>…</TableBody>
</Table>`,
  },
  {
    slug: "tabs",
    name: "Tabs",
    description: "Switch between panels.",
    usage: `<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
  </TabsList>
  <TabsContent value="account">…</TabsContent>
</Tabs>`,
  },
  {
    slug: "textarea",
    name: "Textarea",
    description: "Multiline field. Try typing, disabled, and invalid.",
    usage: `<Textarea placeholder="Message" />`,
  },
  {
    slug: "toggle",
    name: "Toggle",
    description: "Latching button with variant and size.",
    usage: `<Toggle>Italic</Toggle>
<Toggle variant="outline" pressed>Italic</Toggle>`,
  },
  {
    slug: "toggle-group",
    name: "Toggle Group",
    description: "Grouped toggles. Single-select Bold / Italic / Underline.",
    usage: `<ToggleGroup type="single" defaultValue="bold">
  <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
</ToggleGroup>`,
  },
  {
    slug: "tooltip",
    name: "Tooltip",
    description: "Short hint on hover.",
    usage: `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover</Button>
    </TooltipTrigger>
    <TooltipContent>Add to library</TooltipContent>
  </Tooltip>
</TooltipProvider>`,
  },
];

export function getComponent(slug: string): ComponentDoc | undefined {
  return COMPONENTS.find((item) => item.slug === slug);
}
