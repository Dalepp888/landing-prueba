"use client";

import React, { useState, useEffect } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

type Language = "javascript" | "python" | "php";

interface CodeExample {
  language: Language;
  label: string;
  code: string;
}

const codeExamples: CodeExample[] = [
  {
    language: "javascript",
    label: "JAVASCRIPT",
    code: `// Instalar: npm install smscuba-otp

import { SMSCuba } from 'smscuba-otp';

const client = new SMSCuba('sk_live_...');

async function sendOTP() {
  const result = await client.send({
    phone: '+5352889900',
    message: 'Tu código es: {{code}}'
  });

  console.log(\`Enviado! ID: \${result.id}\`);
}`,
  },
  {
    language: "python",
    label: "PYTHON",
    code: `# Instalar: pip install smscuba-otp

from smscuba import SMSCuba

client = SMSCuba('sk_live_...')

def send_otp():
    result = client.send(
        phone='+5352889900',
        message='Tu código es: {code}'
    )
    
    print(f"Enviado! ID: {result.id}")

send_otp()`,
  },
  {
    language: "php",
    label: "PHP",
    code: `<?php
// Instalar: composer require smscuba/otp

require_once 'vendor/autoload.php';

use SMSCuba\\SMSCuba;

$client = new SMSCuba('sk_live_...');

$result = $client->send([
    'phone' => '+5352889900',
    'message' => 'Tu código es: {{code}}'
]);

echo "Enviado! ID: " . $result->id;
?>`,
  },
];

interface TerminalStep {
  text: string;
  type: "info" | "success" | "id";
  delay: number;
}

const terminalSteps: TerminalStep[] = [
  { text: "Initializing connection...", type: "info", delay: 0 },
  { text: "Authenticating with API...", type: "info", delay: 600 },
  { text: "Sending request to endpoint...", type: "info", delay: 1200 },
  { text: "Success! Message delivered in 145ms", type: "success", delay: 1800 },
  { text: "ID: msg_8f92j92", type: "id", delay: 2200 },
];

export default function CodePlayground() {
  const [activeTab, setActiveTab] = useState<Language>("javascript");
  const [copied, setCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [visibleSteps, setVisibleSteps] = useState<number>(0);

  const currentCode = codeExamples.find((ex) => ex.language === activeTab)?.code || "";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunDemo = () => {
    setIsRunning(true);
    setVisibleSteps(0);

    terminalSteps.forEach((step, index) => {
      setTimeout(() => {
        setVisibleSteps((prev) => prev + 1);
      }, step.delay);
    });

    setTimeout(() => {
      setIsRunning(false);
    }, 3000);
  };

  const renderCodeWithHighlighting = (code: string) => {
    const lines = code.split("\n");

    return lines.map((line, lineIndex) => {
      let highlightedLine = line;

      // Comments
      if (line.includes("//") || line.includes("#")) {
        const commentMatch = line.match(/(\s*)(\/\/|#)(.*)/);
        if (commentMatch) {
          const [_, indent, prefix, content] = commentMatch;
          highlightedLine = `${indent}<span class="text-gray-500">${prefix}${content}</span>`;
        }
      }

      // Keywords
      highlightedLine = highlightedLine
        .replace(/\b(import|from|const|async|function|await|return|new|def|class|use|echo|require_once)\b/g, '<span class="text-purple-400">$1</span>')
        .replace(/\b(SMSCuba|sendOTP|send_otp)\b/g, '<span class="text-yellow-400">$1</span>')
        .replace(/\b(client|result|phone|message)\b/g, '<span class="text-blue-400">$1</span>')
        .replace(/\b(console|log|print|json|id)\b/g, '<span class="text-cyan-400">$1</span>')
        .replace(/('.*?')|(".*?")/g, '<span class="text-emerald-400">$1$2</span>')
        .replace(/(\+\d+)/g, '<span class="text-emerald-400">$1</span>');

      // Template literals and variables
      highlightedLine = highlightedLine
        .replace(/\$\{([^}]+)\}/g, '<span class="text-orange-400">${$1}</span>')
        .replace(/\{([^}]+)\}/g, '<span class="text-orange-400">{$1}</span>')
        .replace(/\$([a-zA-Z_]+)/g, '<span class="text-blue-400">$$1</span>');

      return (
        <div key={lineIndex} className="flex">
          <span className="text-gray-600 select-none w-8 text-right mr-4 text-sm">
            {lineIndex + 1}
          </span>
          <span
            className="text-sm"
            dangerouslySetInnerHTML={{ __html: highlightedLine }}
          />
        </div>
      );
    });
  };

  return (
    <section className="w-full py-20 px-4 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-emerald-400 uppercase bg-emerald-400/10 rounded-full border border-emerald-400/20">
            Laboratorio de Integración
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Implementa en minutos, no en días
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Nuestra API está diseñada por desarrolladores para desarrolladores. SDKs nativos, tipos
            estrictos y documentación clara.
          </p>
        </div>

        {/* Code Playground Container */}
        <div className="bg-[#0d1117] rounded-2xl border border-gray-800 overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:h-[500px]">
            {/* Left Side - Code Editor */}
            <div className="flex-1 border-b lg:border-b-0 lg:border-r border-gray-800 min-h-[350px] lg:min-h-0 flex flex-col">
              {/* Tabs Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-gray-800">
                <div className="flex gap-1">
                  {codeExamples.map((example) => (
                    <button
                      key={example.language}
                      onClick={() => setActiveTab(example.language)}
                      className={`px-4 py-2 text-xs font-semibold rounded-md transition-all ${
                        activeTab === example.language
                          ? "bg-emerald-500/20 text-emerald-400"
                          : "text-gray-400 hover:text-gray-300 hover:bg-gray-800"
                      }`}
                    >
                      {example.label}
                    </button>
                  ))}
                </div>
                <button
                  onClick={handleCopy}
                  className="p-2 text-gray-400 hover:text-white transition-colors rounded-md hover:bg-gray-800"
                  title="Copiar código"
                >
                  {copied ? (
                    <CheckIcon sx={{ fontSize: 18 }} className="text-emerald-400" />
                  ) : (
                    <ContentCopyIcon sx={{ fontSize: 18 }} />
                  )}
                </button>
              </div>

              {/* Code Content */}
              <div className="flex-1 p-4 font-mono text-sm overflow-auto text-gray-300">
                {renderCodeWithHighlighting(currentCode)}
              </div>
            </div>

            {/* Right Side - Terminal Output */}
            <div className="flex-1 min-h-[350px] lg:min-h-0 flex flex-col">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-gray-800">
                <span className="text-gray-500 text-sm">&gt;_</span>
                <span className="text-gray-400 text-sm">Terminal Output</span>
              </div>

              {/* Terminal Content */}
              <div className="flex-1 p-4 font-mono text-sm bg-[#0d1117] overflow-auto">
                {!isRunning && visibleSteps === 0 && (
                  <span className="text-gray-500">
                    # Click "Run Demo" to simulate API request
                  </span>
                )}

                {terminalSteps.slice(0, visibleSteps).map((step, index) => (
                  <div
                    key={index}
                    className={`mb-2 ${
                      step.type === "success"
                        ? "text-emerald-400"
                        : step.type === "id"
                        ? "text-blue-400"
                        : "text-gray-400"
                    }`}
                  >
                    {step.type === "success" ? (
                      <>
                        <span className="text-emerald-400 mr-2">☑</span>
                        {step.text}
                      </>
                    ) : step.type === "id" ? (
                      <>
                        <span className="text-gray-500 mr-2">&gt;</span>
                        {step.text}
                      </>
                    ) : (
                      <>
                        <span className="text-gray-500 mr-2">&gt;</span>
                        {step.text}
                      </>
                    )}
                  </div>
                ))}

                {isRunning && (
                  <div className="mt-4">
                    <span className="inline-block w-2 h-4 bg-emerald-400 animate-pulse" />
                  </div>
                )}
              </div>

              {/* Run Demo Button */}
              <div className="p-4 border-t border-gray-800 bg-[#161b22]">
                <button
                  onClick={handleRunDemo}
                  disabled={isRunning}
                  className="w-full py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 bg-transparent text-emerald-400 border border-emerald-500 hover:bg-emerald-500/10 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <PlayArrowIcon sx={{ fontSize: 18 }} />
                  {isRunning ? "RUNNING..." : "RUN DEMO"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
