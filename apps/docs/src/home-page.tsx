"use client";

import * as stylex from "@stylexjs/stylex";
import { Inbox } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Badge } from "@stylexcn/components/badge";
import { Button } from "@stylexcn/components/button";
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
import { Kbd, KbdGroup } from "@stylexcn/components/kbd";
import { Label } from "@stylexcn/components/label";
import {
  NativeSelect,
  NativeSelectOption,
} from "@stylexcn/components/native-select";
import { Progress } from "@stylexcn/components/progress";
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
import { COMPONENTS } from "./catalog";
import { chrome } from "./chrome.stylex";
import { landing } from "./landing.stylex";

export function HomePage() {
  const router = useRouter();

  return (
    <div {...stylex.props(landing.page)}>
      <section {...stylex.props(landing.hero)}>
        <div {...stylex.props(landing.heroInner)}>
          <h1 {...stylex.props(landing.title)}>The StyleX port of shadcn/ui</h1>
          <p {...stylex.props(landing.copy)}>
            Components styled with StyleX, not Tailwind, aiming for pixel
            parity with official shadcn/ui New York v4. Open Source. Open Code.
          </p>
          <div {...stylex.props(landing.actions)}>
            <Button type="button" onClick={() => router.push("/docs")}>
              Get Started
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/docs")}
            >
              Browse Components
            </Button>
          </div>
        </div>
      </section>
      <Showcase />
    </div>
  );
}

function Showcase() {
  return (
    <div {...stylex.props(landing.galleryWrap)}>
      <div {...stylex.props(landing.gallery)}>
        <div {...stylex.props(landing.span12)}>
          <ToolbarTile />
        </div>
        <div {...stylex.props(landing.span4)}>
          <NavTile />
        </div>
        <div {...stylex.props(landing.span8)}>
          <SavingsTile />
        </div>
        <div {...stylex.props(landing.span6)}>
          <GoalTile />
        </div>
        <div {...stylex.props(landing.span6)}>
          <NotificationsTile />
        </div>
        <div {...stylex.props(landing.span8)}>
          <InvoicesTile />
        </div>
        <div {...stylex.props(landing.span4)}>
          <ChatTile />
        </div>
        <div {...stylex.props(landing.span6)}>
          <SecurityTile />
        </div>
        <div {...stylex.props(landing.span6)}>
          <ClaimTile />
        </div>
        <div {...stylex.props(landing.span6)}>
          <EmptyTile />
        </div>
      </div>
      <div {...stylex.props(landing.strip)}>
        <div {...stylex.props(landing.stripTitle)}>Components</div>
        <div {...stylex.props(landing.chips)}>
          {COMPONENTS.map((item) => (
            <Link
              key={item.slug}
              href={`/docs/${item.slug}`}
              {...stylex.props(landing.chip)}
            >
              <Badge variant="outline">{item.name}</Badge>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function ToolbarTile() {
  return (
    <Card>
      <CardContent>
        <div {...stylex.props(chrome.row)}>
          <Button>Button</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
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
      </CardContent>
    </Card>
  );
}

function NavTile() {
  return (
    <Card {...stylex.props(landing.tile)}>
      <CardHeader>
        <CardTitle>Overview</CardTitle>
        <CardDescription>Jump between product surfaces.</CardDescription>
      </CardHeader>
      <CardContent>
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
      </CardContent>
    </Card>
  );
}

function SavingsTile() {
  return (
    <Card {...stylex.props(landing.tile)}>
      <CardHeader>
        <CardTitle>Savings targets</CardTitle>
        <CardDescription>
          Active milestones for 2024. Track how close you are to each goal.
        </CardDescription>
        <CardAction>
          <Badge>On track</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div {...stylex.props(landing.goalRow)}>
          <div>
            <div {...stylex.props(landing.goalMeta)}>
              <span>Retirement</span>
              <span {...stylex.props(chrome.muted)}>$273,000 / $420,000</span>
            </div>
            <Progress value={65} />
          </div>
          <div>
            <div {...stylex.props(landing.goalMeta)}>
              <span>Real estate</span>
              <span {...stylex.props(chrome.muted)}>$27,200 / $85,000</span>
            </div>
            <Progress value={32} />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <span {...stylex.props(landing.mutedSm)}>
          You have not met every target for this year.
        </span>
      </CardFooter>
    </Card>
  );
}

function GoalTile() {
  return (
    <Card {...stylex.props(landing.tile)}>
      <CardHeader>
        <CardTitle>Set a new milestone</CardTitle>
        <CardDescription>
          Name a financial target and we will help you pace savings.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div {...stylex.props(landing.tileBody)}>
          <div {...stylex.props(chrome.field)}>
            <Label htmlFor="goal-name">Goal name</Label>
            <Input id="goal-name" defaultValue="Emergency fund" />
          </div>
          <div {...stylex.props(chrome.field)}>
            <Label htmlFor="goal-amount">Target amount</Label>
            <Input id="goal-amount" defaultValue="$10,000" />
          </div>
          <div {...stylex.props(chrome.field)}>
            <Label htmlFor="goal-plan">Savings plan</Label>
            <NativeSelect id="goal-plan" defaultValue="recurring">
              <NativeSelectOption value="recurring">Recurring</NativeSelectOption>
              <NativeSelectOption value="accelerated">
                Accelerated
              </NativeSelectOption>
            </NativeSelect>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div {...stylex.props(chrome.row)}>
          <Button>Create goal</Button>
          <Button variant="outline">Cancel</Button>
        </div>
      </CardFooter>
    </Card>
  );
}

function NotificationsTile() {
  const [tx, setTx] = useState(true);
  const [security, setSecurity] = useState(true);
  const [goals, setGoals] = useState(false);
  const [market, setMarket] = useState(true);

  return (
    <Card {...stylex.props(landing.tile)}>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>
          Choose which email and push alerts you want to receive.
        </CardDescription>
      </CardHeader>
      <CardContent>
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
        </div>
      </CardContent>
      <CardFooter>
        <Button>Save preferences</Button>
      </CardFooter>
    </Card>
  );
}

function InvoicesTile() {
  return (
    <Card {...stylex.props(landing.tile)}>
      <CardHeader>
        <CardTitle>Invoices</CardTitle>
        <CardDescription>Recent billing activity.</CardDescription>
        <CardAction>
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="paid">Paid</TabsTrigger>
            </TabsList>
          </Tabs>
        </CardAction>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead {...stylex.props(chrome.tableAmount)}>Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell {...stylex.props(chrome.tableStrong)}>INV001</TableCell>
              <TableCell>
                <Badge variant="secondary">Paid</Badge>
              </TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell {...stylex.props(chrome.tableAmount)}>$250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell {...stylex.props(chrome.tableStrong)}>INV002</TableCell>
              <TableCell>
                <Badge variant="outline">Pending</Badge>
              </TableCell>
              <TableCell>PayPal</TableCell>
              <TableCell {...stylex.props(chrome.tableAmount)}>$150.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell {...stylex.props(chrome.tableStrong)}>INV003</TableCell>
              <TableCell>
                <Badge variant="destructive">Unpaid</Badge>
              </TableCell>
              <TableCell>Bank Transfer</TableCell>
              <TableCell {...stylex.props(chrome.tableAmount)}>$350.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

function ChatTile() {
  return (
    <Card {...stylex.props(landing.tile)}>
      <CardHeader>
        <CardTitle>New chat</CardTitle>
        <CardDescription>How can I help you today?</CardDescription>
      </CardHeader>
      <CardContent>
        <div {...stylex.props(landing.chatLog)}>
          <div {...stylex.props(landing.bubble, landing.bubbleOut)}>
            The thread jumps whenever the model streams a token.
          </div>
          <div {...stylex.props(landing.bubble, landing.bubbleIn)}>
            Pin the viewport to the last message while content is streaming.
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div {...stylex.props(landing.chatComposer, landing.grow)}>
          <Input placeholder="Send a message" />
          <Button>Send</Button>
        </div>
      </CardFooter>
    </Card>
  );
}

function SecurityTile() {
  return (
    <Card {...stylex.props(landing.tile)}>
      <CardHeader>
        <CardTitle>Account access</CardTitle>
        <CardDescription>Update credentials or re-authenticate.</CardDescription>
      </CardHeader>
      <CardContent>
        <div {...stylex.props(landing.tileBody)}>
          <div {...stylex.props(chrome.field)}>
            <Label htmlFor="sec-email">Email address</Label>
            <Input id="sec-email" defaultValue="ada@example.com" />
          </div>
          <div {...stylex.props(chrome.field)}>
            <Label htmlFor="sec-pass">Current password</Label>
            <Input id="sec-pass" type="password" defaultValue="password" />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div {...stylex.props(chrome.row)}>
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
      </CardFooter>
    </Card>
  );
}

function ClaimTile() {
  return (
    <Card {...stylex.props(landing.tile)}>
      <CardHeader>
        <CardTitle>Claimable balance</CardTitle>
        <CardDescription>Pending setup</CardDescription>
        <CardAction>
          <Badge variant="secondary">Ready</Badge>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div {...stylex.props(landing.tileBody)}>
          <div {...stylex.props(landing.metric)}>$1,211.29</div>
          <p {...stylex.props(landing.mutedSm)}>
            Net royalties $1,248.75 minus a $37.46 processing fee. Balances over
            $10.00 are eligible on the 15th of each month.
          </p>
          <Textarea defaultValue="Payout notes for finance…" />
        </div>
      </CardContent>
      <CardFooter>
        <Button>View full report</Button>
      </CardFooter>
    </Card>
  );
}

function EmptyTile() {
  return (
    <div {...stylex.props(landing.tile)}>
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
    </div>
  );
}
