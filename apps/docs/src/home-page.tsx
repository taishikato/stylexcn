"use client";

import * as stylex from "@stylexjs/stylex";
import { ArrowRight, Inbox } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type ReactNode } from "react";
import { Badge } from "@stylexcn/components/badge";
import { Button } from "@stylexcn/components/button";
import { ButtonGroup } from "@stylexcn/components/button-group";
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
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@stylexcn/components/empty";
import { Input } from "@stylexcn/components/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@stylexcn/components/input-group";
import { Kbd, KbdGroup } from "@stylexcn/components/kbd";
import { Label } from "@stylexcn/components/label";
import {
  NativeSelect,
  NativeSelectOption,
} from "@stylexcn/components/native-select";
import { Progress } from "@stylexcn/components/progress";
import { Slider } from "@stylexcn/components/slider";
import { Spinner } from "@stylexcn/components/spinner";
import { Switch } from "@stylexcn/components/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@stylexcn/components/table";
import { Tabs, TabsList, TabsTrigger } from "@stylexcn/components/tabs";
import { Textarea } from "@stylexcn/components/textarea";
import { InstallCommand } from "./install-command";
import { addUrlCommand } from "./install";
import { landing } from "./landing.stylex";
import { SiteFooter } from "./site-header";

export function HomePage() {
  const router = useRouter();

  return (
    <div {...stylex.props(landing.page)}>
      <section {...stylex.props(landing.hero)}>
        <div {...stylex.props(landing.heroInner)}>
          <Link href="/docs/input-group" {...stylex.props(landing.pill)}>
            New Input Group
            <ArrowRight size={14} />
          </Link>
          <h1 {...stylex.props(landing.title)}>
            StyleX components. shadcn look.
          </h1>
          <p {...stylex.props(landing.copy)}>
            A port of shadcn/ui - same look, StyleX instead of Tailwind. Open
            source. Open code.
          </p>
          <Button type="button" onClick={() => router.push("/docs")}>
            Get Started
            <ArrowRight size={16} />
          </Button>
          <div {...stylex.props(landing.heroInstall)}>
            <InstallCommand
              command={addUrlCommand("button")}
              hint="Official shadcn CLI. StyleX must already be set up in your app."
            />
          </div>
        </div>
      </section>
      <Showcase />
      <SiteFooter />
    </div>
  );
}

function Tile({
  children,
  title,
  description,
  action,
}: {
  children: ReactNode;
  title?: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div {...stylex.props(landing.tile)}>
      {title ? (
        <div {...stylex.props(landing.tileHead)}>
          <div {...stylex.props(landing.tileHeadRow)}>
            <div>
              <div {...stylex.props(landing.tileTitle)}>{title}</div>
              {description ? (
                <div {...stylex.props(landing.tileDesc)}>{description}</div>
              ) : null}
            </div>
            {action}
          </div>
        </div>
      ) : null}
      {children}
    </div>
  );
}

function Showcase() {
  return (
    <div {...stylex.props(landing.galleryStage)}>
      <div {...stylex.props(landing.gallery)}>
        <ControlsTile />
        <NavTile />
        <SavingsTile />
        <GoalTile />
        <NotificationsTile />
        <InvoicesTile />
        <ChatTile />
        <SecurityTile />
        <ClaimTile />
        <EmptyTile />
        <PayoutTile />
      </div>
      <div {...stylex.props(landing.fade)} />
    </div>
  );
}

function ControlsTile() {
  return (
    <Tile>
      <div {...stylex.props(landing.wrap)}>
        <Button>Button</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
      </div>
      <Input placeholder="Search documentation..." />
      <div {...stylex.props(landing.wrap)}>
        <ButtonGroup>
          <Button variant="outline">Copy</Button>
          <Button variant="outline">Paste</Button>
        </ButtonGroup>
        <Badge>Badge</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
        <Spinner />
      </div>
    </Tile>
  );
}

function NavTile() {
  return (
    <Tile title="Overview" description="Jump between product surfaces.">
      <div {...stylex.props(landing.tileBody)}>
        <div {...stylex.props(landing.navBlock)}>
          <div {...stylex.props(landing.navHeading)}>Planning</div>
          <Button variant="ghost" size="sm">
            Documents
          </Button>
          <Button variant="ghost" size="sm">
            Budget
          </Button>
          <Button variant="ghost" size="sm">
            Reports
          </Button>
        </div>
        <div {...stylex.props(landing.navBlock)}>
          <div {...stylex.props(landing.navHeading)}>Account</div>
          <Button variant="ghost" size="sm">
            Profile
          </Button>
          <Button variant="ghost" size="sm">
            Billing
          </Button>
          <Button variant="ghost" size="sm">
            Security
          </Button>
        </div>
      </div>
    </Tile>
  );
}

function SavingsTile() {
  return (
    <Tile
      title="Savings targets"
      description="Active milestones for 2024 across your portfolio."
      action={<Badge>On track</Badge>}
    >
      <div {...stylex.props(landing.tileBody)}>
        <div>
          <div {...stylex.props(landing.goalMeta)}>
            <span>Retirement</span>
            <span {...stylex.props(landing.mutedSm)}>$273,000 / $420,000</span>
          </div>
          <Progress value={65} />
        </div>
        <div>
          <div {...stylex.props(landing.goalMeta)}>
            <span>Real estate</span>
            <span {...stylex.props(landing.mutedSm)}>$27,200 / $85,000</span>
          </div>
          <Progress value={32} />
        </div>
        <p {...stylex.props(landing.mutedSm)}>
          You have not met every target for this year.
        </p>
      </div>
    </Tile>
  );
}

function GoalTile() {
  return (
    <Tile
      title="Set a new milestone"
      description="Name a financial target and we will help you pace savings."
    >
      <div {...stylex.props(landing.tileBody)}>
        <div {...stylex.props(landing.field)}>
          <Label htmlFor="goal-name">Goal name</Label>
          <Input id="goal-name" defaultValue="Emergency fund" />
        </div>
        <div {...stylex.props(landing.field)}>
          <Label htmlFor="goal-amount">Target amount</Label>
          <InputGroup>
            <InputGroupAddon>
              <InputGroupText>$</InputGroupText>
            </InputGroupAddon>
            <InputGroupInput id="goal-amount" defaultValue="10,000" />
          </InputGroup>
        </div>
        <div {...stylex.props(landing.field)}>
          <Label htmlFor="goal-plan">Savings plan</Label>
          <NativeSelect id="goal-plan" defaultValue="recurring">
            <NativeSelectOption value="recurring">Recurring</NativeSelectOption>
            <NativeSelectOption value="accelerated">
              Accelerated
            </NativeSelectOption>
          </NativeSelect>
        </div>
        <div {...stylex.props(landing.wrap)}>
          <Button>Create goal</Button>
          <Button variant="outline">Cancel</Button>
        </div>
      </div>
    </Tile>
  );
}

function NotificationsTile() {
  const [tx, setTx] = useState(true);
  const [security, setSecurity] = useState(true);
  const [goals, setGoals] = useState(false);
  const [market, setMarket] = useState(true);

  return (
    <Tile
      title="Notifications"
      description="Choose which email and push alerts you want to receive."
    >
      <div {...stylex.props(landing.tileBody)}>
        <div {...stylex.props(landing.prefRow)}>
          <div>
            <div>Transaction alerts</div>
            <div {...stylex.props(landing.mutedSm)}>
              Deposits, withdrawals, and transfers.
            </div>
          </div>
          <Switch checked={tx} onCheckedChange={setTx} />
        </div>
        <div {...stylex.props(landing.prefRow)}>
          <div>
            <div>Security alerts</div>
            <div {...stylex.props(landing.mutedSm)}>
              Login attempts and account changes.
            </div>
          </div>
          <Switch checked={security} onCheckedChange={setSecurity} />
        </div>
        <div {...stylex.props(landing.prefRow)}>
          <div>
            <div>Goal milestones</div>
            <div {...stylex.props(landing.mutedSm)}>
              Updates at 25%, 50%, 75%, and 100%.
            </div>
          </div>
          <Switch checked={goals} onCheckedChange={setGoals} />
        </div>
        <div {...stylex.props(landing.prefRow)}>
          <div>
            <div>Market updates</div>
            <div {...stylex.props(landing.mutedSm)}>
              Daily portfolio summary and price alerts.
            </div>
          </div>
          <Switch checked={market} onCheckedChange={setMarket} />
        </div>
        <Button>Save preferences</Button>
      </div>
    </Tile>
  );
}

function InvoicesTile() {
  return (
    <Tile
      title="Invoices"
      description="Recent billing activity."
      action={
        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="paid">Paid</TabsTrigger>
          </TabsList>
        </Tabs>
      }
    >
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead {...stylex.props(landing.tableAmount)}>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell {...stylex.props(landing.tableStrong)}>INV001</TableCell>
            <TableCell>
              <Badge variant="secondary">Paid</Badge>
            </TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell {...stylex.props(landing.tableAmount)}>$250.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell {...stylex.props(landing.tableStrong)}>INV002</TableCell>
            <TableCell>
              <Badge variant="outline">Pending</Badge>
            </TableCell>
            <TableCell>PayPal</TableCell>
            <TableCell {...stylex.props(landing.tableAmount)}>$150.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell {...stylex.props(landing.tableStrong)}>INV003</TableCell>
            <TableCell>
              <Badge variant="destructive">Unpaid</Badge>
            </TableCell>
            <TableCell>Bank Transfer</TableCell>
            <TableCell {...stylex.props(landing.tableAmount)}>$350.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Tile>
  );
}

function ChatTile() {
  return (
    <Tile title="New chat" description="How can I help you today?">
      <div {...stylex.props(landing.chatLog)}>
        <div {...stylex.props(landing.bubble, landing.bubbleOut)}>
          The thread jumps whenever the model streams a token.
        </div>
        <div {...stylex.props(landing.bubble, landing.bubbleIn)}>
          Pin the viewport to the last message while content is streaming.
        </div>
      </div>
      <div {...stylex.props(landing.chatComposer)}>
        <div {...stylex.props(landing.grow)}>
          <Input placeholder="Send a message" />
        </div>
        <Button>Send</Button>
      </div>
    </Tile>
  );
}

function SecurityTile() {
  return (
    <Tile
      title="Account access"
      description="Update credentials or re-authenticate."
    >
      <div {...stylex.props(landing.tileBody)}>
        <div {...stylex.props(landing.field)}>
          <Label htmlFor="sec-email">Email address</Label>
          <Input id="sec-email" defaultValue="ada@example.com" />
        </div>
        <div {...stylex.props(landing.field)}>
          <Label htmlFor="sec-pass">Current password</Label>
          <Input id="sec-pass" type="password" defaultValue="password" />
        </div>
        <div {...stylex.props(landing.wrap)}>
          <Dialog>
            <DialogTrigger asChild>
              <Button>Update security</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Confirm security update</DialogTitle>
                <DialogDescription>
                  We will email a confirmation link before the change takes
                  effect.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button>Send confirmation</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Button variant="outline">Forgot?</Button>
        </div>
      </div>
    </Tile>
  );
}

function ClaimTile() {
  return (
    <Tile
      title="Claimable balance"
      description="Pending setup"
      action={<Badge variant="secondary">Ready</Badge>}
    >
      <div {...stylex.props(landing.metric)}>$1,211.29</div>
      <p {...stylex.props(landing.mutedSm)}>
        Net royalties $1,248.75 minus a $37.46 processing fee. Balances over
        $10.00 are eligible on the 15th of each month.
      </p>
      <Textarea defaultValue="Payout notes for finance…" />
      <Button>View full report</Button>
    </Tile>
  );
}

function EmptyTile() {
  return (
    <Tile>
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Inbox />
          </EmptyMedia>
          <EmptyTitle>No releases</EmptyTitle>
          <EmptyDescription>
            Upload your first master to start reaching listeners on Spotify,
            Apple Music, and more.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button>Create release</Button>
        </EmptyContent>
      </Empty>
    </Tile>
  );
}

function PayoutTile() {
  const [value, setValue] = useState([2500]);
  return (
    <Tile
      title="Payout threshold"
      description="Minimum balance before a payout is triggered."
    >
      <div {...stylex.props(landing.tileBody)}>
        <div {...stylex.props(landing.field)}>
          <Label htmlFor="currency">Preferred currency</Label>
          <NativeSelect id="currency" defaultValue="usd">
            <NativeSelectOption value="usd">
              USD - United States Dollar
            </NativeSelectOption>
            <NativeSelectOption value="eur">EUR - Euro</NativeSelectOption>
          </NativeSelect>
        </div>
        <div {...stylex.props(landing.field)}>
          <Label>Minimum payout amount</Label>
          <div {...stylex.props(landing.metric)}>
            ${value[0].toLocaleString()}
          </div>
          <Slider
            min={50}
            max={10000}
            step={50}
            value={value}
            onValueChange={setValue}
          />
          <div {...stylex.props(landing.goalMeta)}>
            <span {...stylex.props(landing.mutedSm)}>$50 (MIN)</span>
            <span {...stylex.props(landing.mutedSm)}>$10,000 (MAX)</span>
          </div>
        </div>
        <Button>Save threshold</Button>
      </div>
    </Tile>
  );
}
