export const Sample = () => (
  <code className="grid">
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
      <span className="text-code-violet">import</span>
      <span> </span>
      <span className="text-code-violet">{`{`}</span>
      <span> </span>
      <span className="text-code-blue">NextResponse</span>
      <span> </span>
      <span className="text-code-violet">{`}`}</span>
      <span> </span>
      <span className="text-code-violet">from</span>
      <span> </span>
      <span className="text-code-green">&apos;next/server&apos;</span>
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
    </div>

    <div>
      {Array.from({ length: 2 }).map((_, index) => (
        <span key={index}> </span>
      ))}
      <span className="text-code-red">apiVersion</span>
      <span className="text-code-gray">:</span>
      <span> </span>
      <span className="text-code-green">&apos;2026-01-28&apos;</span>
      <span className="text-code-gray">,</span>
    </div>

    <div>
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
      <span className="text-code-red">req</span>
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
      <span className="text-code-violet">{`{`}</span>
      <span> </span>
      <span className="text-code-red">amount</span>
      <span> </span>
      <span className="text-code-violet">{`}`}</span>
      <span> </span>
      <span className="text-code-gray">=</span>
      <span> </span>
      <span className="text-code-violet">await</span>
      <span> </span>
      <span className="text-code-red">req</span>
      <span className="text-code-gray">.</span>
      <span className="text-code-blue">json</span>
      <span className="text-code-violet">(</span>
      <span className="text-code-violet">)</span>
      <span className="text-code-gray">;</span>
    </div>

    <div>
      <span> </span>
    </div>

    <div>
      {Array.from({ length: 4 }).map((_, index) => (
        <span key={index}> </span>
      ))}
      <span className="text-code-violet">const</span>
      <span> </span>
      <span className="text-code-blue">paymentIntent</span>
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
      <span className="text-code-amber">10000</span>
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
      <span className="text-code-red">order_id</span>
      <span className="text-code-gray">:</span>
      <span> </span>
      <span className="text-code-green">&apos;122&apos;</span>
      <span className="text-code-gray">,</span>
    </div>

    <div>
      {Array.from({ length: 8 }).map((_, index) => (
        <span key={index}> </span>
      ))}
      <span className="text-code-red">customer_email</span>
      <span className="text-code-gray">:</span>
      <span> </span>
      <span className="text-code-green">&apos;zarr@zarr.design&apos;</span>
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
      <span> </span>
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
    </div>

    <div>
      {Array.from({ length: 6 }).map((_, index) => (
        <span key={index}> </span>
      ))}
      <span className="text-code-red">clientSecret</span>
      <span className="text-code-gray">:</span>
      <span> </span>
      <span className="text-code-blue">paymentIntent</span>
      <span className="text-code-gray">.</span>
      <span className="text-code-red">client_secret</span>
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
      {Array.from({ length: 2 }).map((_, index) => (
        <span key={index}> </span>
      ))}
      <span className="text-code-violet">{`}`}</span>
      <span> </span>
      <span className="text-code-violet">catch</span>
      <span> </span>
      <span className="text-code-violet">(</span>
      <span className="text-code-red">error</span>
      <span className="text-code-violet">)</span>
      <span> </span>
      <span className="text-code-violet">{`{`}</span>
    </div>

    <div>
      {Array.from({ length: 4 }).map((_, index) => (
        <span key={index}> </span>
      ))}
      <span className="text-code-yellow">console</span>
      <span className="text-code-gray">.</span>
      <span className="text-code-blue">error</span>
      <span className="text-code-violet">(</span>
      <span className="text-code-green">
        &apos;Error creating PaymentIntent:&apos;
      </span>
      <span className="text-code-gray">,</span>
      <span> </span>
      <span className="text-code-red">error</span>
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
      <span className="text-code-red">error</span>
      <span className="text-code-gray">:</span>
      <span> </span>
      <span className="text-code-green">
        &apos;Failed to create payment intent&apos;
      </span>
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
