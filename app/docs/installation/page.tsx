import CodeBlock from "@/components/site/CodeBlock";

export default function Installation() {
  return (
    <div>
      <h1>Installation</h1>

      <p>Get Mosiac set up in your project and start adding components.</p>

      <h2>Prerequisites</h2>

      <p>
        Mosiac components are built for React and use Tailwind CSS and Motion.
        Make sure these are already configured in your project.
      </p>

      <h2>Using the CLI</h2>

      <p>
        Mosiac components can be installed using the shadcn CLI. Follow the{" "}
        <a className="text-neutral-700 dark:text-neutral-300" href="https://ui.shadcn.com/docs/cli">shadcn CLI documentation</a> to
        set up and use the CLI.
      </p>

      <p>
        The component will be added directly to your project, where you can
        import and customize it.
      </p>

      <h2>Using Manually</h2>

      <p>
        You can also install components without the CLI. Open the component
        page, copy its source code, and add it to your project.
      </p>

      <pre>
        <code>{`src/
└── components/
    └── ui/
        └── text-actions.tsx`}</code>
      </pre>

      <p>
        Check the component's documentation for any dependencies it requires.
      </p>

      <h2>Utilities</h2>

      <p>Mosiac components use a small utility for merging Tailwind classes.</p>

      <pre>
        <code>{`import { twMerge } from 'tailwind-merge';
import clsx, { type ClassValue } from 'clsx';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
`}</code>
      </pre>

      <h2>That's it</h2>

      <p>
        Once your project is ready, head over to the components and install
        whatever you need.
      </p>
    </div>
  );
}
