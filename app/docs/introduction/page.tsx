export default function Introduction() {
  return (
    <div className="space-y-10 px-6 lg:px-10">
      <div className="space-y-4">
        <h1 className="text-3xl">Introduction</h1>

        <p className="">
          <strong className="text-neutral-800 dark:text-neutral-300">Mosiac</strong> is a
          collection of customizable components made for building modern AI
          interfaces. It gives you the building blocks for prompts, AI
          interactions, animated states, and the details that make an interface
          feel great to use.
        </p>

        <p className="">
          Mosiac is built with Next JS, React, Tailwind CSS, and Motion. Every
          component is designed to work with the way you already build your
          application, while giving you complete control over its code and
          appearance.
        </p>

        <p className="">
          Instead of installing a package and treating its components as a black
          box, Mosiac puts the component code directly in your project. Use it
          as it is, change it to match your design, or take the idea further and
          make it your own.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">
          Built for AI interfaces
        </h2>

        <p className="">
          AI products have their own set of interaction patterns. A prompt input
          needs to feel responsive. A generation state needs to communicate what
          is happening. A response needs to transition naturally as new content
          appears.
        </p>

        <p className="">
          Mosiac focuses on these details and turns them into reusable
          components that you can drop into your own product.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">
          Open and customizable
        </h2>

        <p className="">
          The source code is yours to work with. There is no hidden layer
          between you and the component. You can inspect the implementation,
          change the styles, adjust the animation, add new behavior, or remove
          anything you don't need.
        </p>

        <p className="">
          Mosiac is meant to give you a strong starting point, not something you
          have to work around.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">
          Made with motion
        </h2>

        <p className="">
          Motion is part of how Mosiac components communicate. Transitions,
          state changes, and interactions are designed to feel intentional
          rather than simply adding animation for the sake of it.
        </p>
      </div>

      <p className="">
        Mosiac is open source and continuously evolving. Explore the components,
        experiment with them, and build something of your own.
      </p>
    </div>
  );
}
