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
    description: "折りたたみ可能なセクション。質問と回答を重ねて置けます。",
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
    description: "ページ内の注意書き。default と destructive があります。",
    usage: `<Alert>
  <AlertTitle>Heads up</AlertTitle>
  <AlertDescription>You can add components to your app.</AlertDescription>
</Alert>`,
  },
  {
    slug: "alert-dialog",
    name: "Alert Dialog",
    description: "破壊的な操作の確認ダイアログ。開いて Cancel / Continue を押せます。",
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
    description: "指定比率の枠。中身の塗りは呼び出し側で足します。",
    usage: `<AspectRatio ratio={16 / 9}>
  <div />
</AspectRatio>`,
  },
  {
    slug: "avatar",
    name: "Avatar",
    description: "ユーザーの顔写真またはイニシャル。サイズ・バッジ・グループに対応。",
    usage: `<Avatar>
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`,
  },
  {
    slug: "badge",
    name: "Badge",
    description: "短いラベル。default / secondary / destructive / outline / ghost / link。",
    usage: `<Badge>Badge</Badge>
<Badge variant="secondary">Secondary</Badge>`,
  },
  {
    slug: "breadcrumb",
    name: "Breadcrumb",
    description: "現在地までのパンくず。ellipsis で途中を省略できます。",
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
    description: "操作の起点。variant と size の組み合わせをそのままクリックできます。",
    usage: `<Button>Button</Button>
<Button variant="outline" size="sm">Outline</Button>`,
  },
  {
    slug: "card",
    name: "Card",
    description: "見出し・本文・フッターをまとめるコンテナ。",
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
    description: "オンオフのチェック。無効・不正値の見た目もあります。",
    usage: `<Checkbox id="terms" />
<Label htmlFor="terms">Accept terms</Label>`,
  },
  {
    slug: "collapsible",
    name: "Collapsible",
    description: "トリガーで開閉するパネル。見た目の枠は呼び出し側です。",
    usage: `<Collapsible>
  <CollapsibleTrigger asChild>
    <Button variant="outline">Toggle</Button>
  </CollapsibleTrigger>
  <CollapsibleContent>Hidden copy</CollapsibleContent>
</Collapsible>`,
  },
  {
    slug: "context-menu",
    name: "Context Menu",
    description: "右クリックで出すメニュー。破線の箱を右クリックしてください。",
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
    description: "中央モーダル。開いて閉じるまで操作できます。",
    usage: `<Dialog>
  <DialogTrigger asChild>
    <Button variant="outline">Open dialog</Button>
  </DialogTrigger>
  <DialogContent>…</DialogContent>
</Dialog>`,
  },
  {
    slug: "dropdown-menu",
    name: "Dropdown Menu",
    description: "ボタンから開くメニュー。項目・チェック・ラジオが入ります。",
    usage: `<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>…</DropdownMenuContent>
</DropdownMenu>`,
  },
  {
    slug: "hover-card",
    name: "Hover Card",
    description: "ホバー（またはフォーカス）で出す小さなカード。",
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
    description: "1行テキスト。入力・無効・不正値を試せます。",
    usage: `<Input placeholder="Email" />
<Input aria-invalid defaultValue="bad" />`,
  },
  {
    slug: "label",
    name: "Label",
    description: "フォーム項目のキャプション。Input と組み合わせます。",
    usage: `<Label htmlFor="email">Email</Label>
<Input id="email" />`,
  },
  {
    slug: "menubar",
    name: "Menubar",
    description: "アプリ風のメニューバー。File を開いて項目を選べます。",
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
    slug: "pagination",
    name: "Pagination",
    description: "ページ送り。アクティブなページ番号と省略記号があります。",
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
    description: "クリックで出す浮きパネル。中に短い説明を置けます。",
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
    description: "進捗バー。空・途中・完了を並べています。",
    usage: `<Progress value={60} />`,
  },
  {
    slug: "radio-group",
    name: "Radio Group",
    description: "択一のラジオ。無効・不正値も確認できます。",
    usage: `<RadioGroup defaultValue="one">
  <RadioGroupItem value="one" id="one" />
  <Label htmlFor="one">One</Label>
</RadioGroup>`,
  },
  {
    slug: "resizable",
    name: "Resizable",
    description: "パネル分割。ハンドルをドラッグして比率を変えられます。",
    usage: `<ResizablePanelGroup orientation="horizontal">
  <ResizablePanel defaultSize={50}>One</ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={50}>Two</ResizablePanel>
</ResizablePanelGroup>`,
  },
  {
    slug: "scroll-area",
    name: "Scroll Area",
    description: "枠内スクロール。縦リストと横スクロールがあります。",
    usage: `<ScrollArea type="always">
  {children}
</ScrollArea>`,
  },
  {
    slug: "select",
    name: "Select",
    description: "選択肢のドロップダウン。default と sm サイズを開けます。",
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
    description: "区切り線。横方向と縦方向。",
    usage: `<Separator />
<Separator orientation="vertical" />`,
  },
  {
    slug: "sheet",
    name: "Sheet",
    description: "端から滑り込むパネル。right / left / top / bottom。",
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
    description: "読み込み中のプレースホルダー。角丸と円形。",
    usage: `<Skeleton />
<Skeleton radius="full" />`,
  },
  {
    slug: "slider",
    name: "Slider",
    description: "数値スライダー。単一サムと範囲、無効状態。",
    usage: `<Slider defaultValue={[50]} />
<Slider defaultValue={[25, 75]} />`,
  },
  {
    slug: "switch",
    name: "Switch",
    description: "トグルスイッチ。オンオフを指で切り替えられます。",
    usage: `<Switch id="airplane" />
<Label htmlFor="airplane">Airplane mode</Label>`,
  },
  {
    slug: "table",
    name: "Table",
    description: "データ表。ヘッダー・行・フッター・キャプション。",
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
    description: "タブで内容を切り替えます。",
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
    description: "複数行テキスト。入力・無効・不正値。",
    usage: `<Textarea placeholder="Message" />`,
  },
  {
    slug: "toggle",
    name: "Toggle",
    description: "押したままになるボタン。variant と size があります。",
    usage: `<Toggle>Italic</Toggle>
<Toggle variant="outline" pressed>Italic</Toggle>`,
  },
  {
    slug: "toggle-group",
    name: "Toggle Group",
    description: "グループ化されたトグル。単一選択の太字・斜体・下線。",
    usage: `<ToggleGroup type="single" defaultValue="bold">
  <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
</ToggleGroup>`,
  },
  {
    slug: "tooltip",
    name: "Tooltip",
    description: "ホバーで短いヒントを出します。",
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
