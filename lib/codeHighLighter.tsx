"use client";

import React from "react";

type TokenType =
  | "keyword"
  | "string"
  | "number"
  | "comment"
  | "function"
  | "tag"
  | "attribute"
  | "operator"
  | "punctuation"
  | "plain";

type Token = {
  type: TokenType;
  value: string;
};

const keywords = new Set([
  "const",
  "let",
  "var",
  "function",
  "return",
  "if",
  "else",
  "for",
  "while",
  "new",
  "class",
  "extends",
  "import",
  "export",
  "from",
  "default",
  "async",
  "await",
  "throw",
  "try",
  "catch",
  "finally",
  "typeof",
  "instanceof",
  "in",
  "of",
  "true",
  "false",
  "null",
  "undefined",
  "interface",
  "type",
  "implements",
  "public",
  "private",
  "protected",
]);

const tokenClass: Record<TokenType, string> = {
  keyword: "text-purple-400",
  string: "text-green-400",
  number: "text-orange-400",
  comment: "text-neutral-500",
  function: "text-blue-400",
  tag: "text-red-400",
  attribute: "text-yellow-400",
  operator: "text-pink-400",
  punctuation: "text-neutral-400",
  plain: "text-neutral-200",
};

function tokenize(code: string): Token[] {
  const tokens: Token[] = [];

  const regex =
    /(\/\/.*|\/\*[\s\S]*?\*\/)|(["'`](?:\\.|(?!\1)[\s\S])*?["'`])|\b\d+(?:\.\d+)?\b|<\/?[A-Za-z][^>]*>|[A-Za-z_$][\w$]*|===|!==|=>|==|!=|<=|>=|\+\+|--|&&|\|\||[+\-*/%=<>!?:&|]+|[{}[\]();,.\n]/g;

  let lastIndex = 0;

  for (const match of code.matchAll(regex)) {
    const value = match[0];
    const index = match.index ?? 0;

    if (index > lastIndex) {
      tokens.push({
        type: "plain",
        value: code.slice(lastIndex, index),
      });
    }

    let type: TokenType = "plain";

    if (value.startsWith("//") || value.startsWith("/*")) {
      type = "comment";
    } else if (
      value.startsWith('"') ||
      value.startsWith("'") ||
      value.startsWith("`")
    ) {
      type = "string";
    } else if (/^\d/.test(value)) {
      type = "number";
    } else if (/^<\/?[A-Za-z]/.test(value)) {
      type = "tag";
    } else if (keywords.has(value)) {
      type = "keyword";
    } else if (
      /^(===|!==|=>|==|!=|<=|>=|\+\+|--|&&|\|\||[+\-*/%=<>!?:&|]+)$/.test(
        value
      )
    ) {
      type = "operator";
    } else if (/^[{}[\]();,.\n]$/.test(value)) {
      type = "punctuation";
    }

    tokens.push({ type, value });

    lastIndex = index + value.length;
  }

  if (lastIndex < code.length) {
    tokens.push({
      type: "plain",
      value: code.slice(lastIndex),
    });
  }

  return tokens;
}

export function CodeHighlighter({
  code,
}: {
  code: string;
}) {
  const tokens = tokenize(code);

  return (
    <>
      {tokens.map((token, index) => (
        <span
          key={index}
          className={tokenClass[token.type]}
        >
          {token.value}
        </span>
      ))}
    </>
  );
}