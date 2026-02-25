"use client";

import { motion } from "framer-motion";
import { Icons } from "@/components/icons";
import { BLUR_ANIMATION } from "@/config/animation";
import { WEBSITE_CONFIG } from "@/config/site";

export const Code = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={BLUR_ANIMATION.variants}
      transition={{
        ...BLUR_ANIMATION.transition,
        delay: BLUR_ANIMATION.transition.duration * 2,
      }}
      className="w-full border bg-background/60 backdrop-blur-sm rounded-sm"
    >
      <div className="p-[24px] flex items-center text-muted-foreground gap-3 border-b">
        <Icons.typescript />
        <p className="text-xs">@/stripe/lib</p>
      </div>

      <pre className="p-[24px] h-fit w-full text-xs md:text-sm overflow-x-scroll">
        <Sample />
      </pre>
    </motion.div>
  );
};

const Sample = () => (
  <code className="space-y-[4px]">
    <div>
      <span className="text-code-violet">import</span>
      <span> </span>
      <span className="text-code-blue">Stripe</span>
      <span> </span>
      <span className="text-code-violet">from</span>
      <span> </span>
      <span className="text-code-green">&apos;stripe&apos;</span>
      <span className="text-code-gray">;</span>
    </div>

    <div>
      <span> </span>
    </div>

    <div>
      <span className="text-code-violet">const</span>
      <span> </span>
      <span className="text-code-blue">stripe</span>
      <span> </span>
      <span className="text-code-gray">=</span>
      <span> </span>
      <span className="text-code-violet">new</span>
      <span> </span>
      <span className="text-code-blue">Stripe</span>
      <span className="text-code-amber">(</span>
      <span className="text-code-yellow">process</span>
      <span className="text-code-gray">.</span>
      <span className="text-code-red">env</span>
      <span className="text-code-gray">.</span>
      <span className="text-code-red">STRIPE_SECRET_KEY</span>
      <span className="text-code-amber">,</span>
      <span> </span>
      <span className="text-code-violet">{`{`}</span>
      <span> </span>
      <span className="text-code-red">apiVersion</span>
      <span className="text-code-gray">:</span>
      <span> </span>
      <span className="text-code-green">&apos;2026-01-28&apos;</span>
      <span> </span>
      <span className="text-code-violet">{`}`}</span>
      <span className="text-code-amber">)</span>
      <span className="text-code-gray">;</span>
    </div>

    <div>
      <span> </span>
    </div>

    <div>
      <span className="text-code-violet">export</span>
      <span> </span>
      <span className="text-code-violet">async</span>
      <span> </span>
      <span className="text-code-violet">function</span>
      <span> </span>
      <span className="text-code-blue">POST</span>
      <span className="text-code-amber">(</span>
      <span className="text-code-red">request</span>
      <span className="text-code-amber">)</span>
      <span> </span>
      <span className="text-code-amber">{`{`}</span>
    </div>

    <div>
      {Array.from({ length: 2 }).map((_, index) => (
        <span key={index}> </span>
      ))}
      <span className="text-code-violet">try</span>
      <span> </span>
      <span className="text-code-violet">{`{`}</span>
    </div>

    <div>
      {Array.from({ length: 4 }).map((_, index) => (
        <span key={index}> </span>
      ))}
      <span className="text-code-violet">const</span>
      <span> </span>
      <span className="text-code-blue">payment</span>
      <span> </span>
      <span className="text-code-gray">=</span>
      <span> </span>
      <span className="text-code-violet">await</span>
      <span> </span>
      <span className="text-code-blue">stripe</span>
      <span className="text-code-gray">.</span>
      <span className="text-code-red">paymentIntents</span>
      <span className="text-code-gray">.</span>
      <span className="text-code-blue">create</span>
      <span className="text-code-violet">(</span>
      <span className="text-code-violet">{`{`}</span>
    </div>

    <div>
      {Array.from({ length: 6 }).map((_, index) => (
        <span key={index}> </span>
      ))}
      <span className="text-code-red">amount</span>
      <span className="text-code-gray">:</span>
      <span> </span>
      <span className="text-code-amber">10,000</span>
      <span className="text-code-gray">,</span>
    </div>

    <div>
      {Array.from({ length: 6 }).map((_, index) => (
        <span key={index}> </span>
      ))}
      <span className="text-code-red">currency</span>
      <span className="text-code-gray">:</span>
      <span> </span>
      <span className="text-code-green">&apos;EUR&apos;</span>
      <span className="text-code-gray">,</span>
    </div>

    <div>
      {Array.from({ length: 6 }).map((_, index) => (
        <span key={index}> </span>
      ))}
      <span className="text-code-red">metadata</span>
      <span className="text-code-gray">:</span>
      <span> </span>
      <span className="text-code-violet">{`{`}</span>
    </div>

    <div>
      {Array.from({ length: 8 }).map((_, index) => (
        <span key={index}> </span>
      ))}
      <span className="text-code-red">customer_email</span>
      <span className="text-code-gray">:</span>
      <span> </span>
      <span className="text-code-green">
        &apos;{WEBSITE_CONFIG.email}&apos;
      </span>
      <span className="text-code-gray">,</span>
    </div>

    <div>
      {Array.from({ length: 6 }).map((_, index) => (
        <span key={index}> </span>
      ))}
      <span className="text-code-violet">{`}`}</span>
      <span className="text-code-gray">,</span>
    </div>

    <div>
      {Array.from({ length: 4 }).map((_, index) => (
        <span key={index}> </span>
      ))}
      <span className="text-code-violet">{`}`}</span>
      <span className="text-code-violet">)</span>
      <span className="text-code-gray">;</span>
    </div>

    <div>
      {Array.from({ length: 4 }).map((_, index) => (
        <span key={index}> </span>
      ))}
      <span className="text-code-violet">return</span>
      <span> </span>
      <span className="text-code-blue">NextResponse</span>
      <span className="text-code-gray">.</span>
      <span className="text-code-blue">json</span>
      <span className="text-code-violet">(</span>
      <span className="text-code-violet">{`{`}</span>
      <span> </span>
      <span className="text-code-red">message</span>
      <span className="text-code-gray">:</span>
      <span> </span>
      <span className="text-code-green">&apos;Success!&apos;</span>
      <span> </span>
      <span className="text-code-violet">{`}`}</span>
      <span className="text-code-violet">)</span>
      <span className="text-code-gray">,</span>
      <span> </span>
      <span className="text-code-violet">{`{`}</span>
      <span> </span>
      <span className="text-code-red">status</span>
      <span className="text-code-gray">:</span>
      <span> </span>
      <span className="text-code-amber">200</span>
      <span> </span>
      <span className="text-code-violet">{`}`}</span>
      <span className="text-code-violet">)</span>
      <span className="text-code-gray">;</span>
    </div>

    <div>
      {Array.from({ length: 2 }).map((_, index) => (
        <span key={index}> </span>
      ))}
      <span className="text-code-violet">{`}`}</span>
      <span> </span>
      <span className="text-code-violet">catch</span>
      <span> </span>
      <span className="text-code-violet">(</span>
      <span className="text-code-red">e</span>
      <span className="text-code-violet">)</span>
      <span> </span>
      <span className="text-code-violet">{`{`}</span>
    </div>

    <div>
      {Array.from({ length: 4 }).map((_, index) => (
        <span key={index}> </span>
      ))}
      <span className="text-code-violet">return</span>
      <span> </span>
      <span className="text-code-blue">NextResponse</span>
      <span className="text-code-gray">.</span>
      <span className="text-code-blue">json</span>
      <span className="text-code-violet">(</span>
      <span className="text-code-violet">{`{`}</span>
      <span> </span>
      <span className="text-code-red">message</span>
      <span className="text-code-gray">:</span>
      <span> </span>
      <span className="text-code-green">&apos;Try again!&apos;</span>
      <span> </span>
      <span className="text-code-violet">{`}`}</span>
      <span className="text-code-gray">,</span>
      <span> </span>
      <span className="text-code-violet">{`{`}</span>
      <span> </span>
      <span className="text-code-red">status</span>
      <span className="text-code-gray">:</span>
      <span> </span>
      <span className="text-code-amber">500</span>
      <span> </span>
      <span className="text-code-violet">{`}`}</span>
      <span className="text-code-violet">)</span>
      <span className="text-code-gray">;</span>
    </div>

    <div>
      {Array.from({ length: 2 }).map((_, index) => (
        <span key={index}> </span>
      ))}
      <span className="text-code-violet">{`}`}</span>
    </div>

    <div>
      <span className="text-code-amber">{`}`}</span>
    </div>
  </code>
);
