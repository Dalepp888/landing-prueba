"use client";

import React, { useState } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Language } from "../constants/codePlayground";
import { codeExamples } from "../constants/codePlayground";
import { terminalSteps } from "../constants/codePlayground";

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
      return (
        <div key={lineIndex} className="flex">
          <span className="text-gray-600 select-none w-8 text-right mr-4 text-sm">
            {lineIndex + 1}
          </span>
          <span
            className="text-sm"
            dangerouslySetInnerHTML={{ __html: line }}
          />
        </div>
      );
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 mb-6 text-[10px] font-extrabold tracking-wider text-black uppercase bg-[#00FF9D] rounded-full shadow-[0_0_5px_rgba(0,255,157,1),0_0_10px_rgba(0,255,157,0.8)]">
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

        <div className="bg-[#0d1117] rounded-2xl border border-gray-800 lg:w-[1000px]">
          <div className="flex flex-col lg:flex-row lg:h-[500px]">
            <div className="flex-1 border-b lg:border-b-0 lg:border-r border-gray-800 min-h-[350px] lg:min-h-0 flex flex-col">
              <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-gray-800">
                <div className="flex gap-1">
                  {codeExamples.map((example) => (
                    <button
                      key={example.language}
                      onClick={() => setActiveTab(example.language)}
                      className={`px-4 py-2 text-xs font-semibold rounded-md transition-all ${activeTab === example.language
                        ? "bg-[#00ff9d]/20 text-[#00ff9d]"
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

              <div className="flex-1 p-4 font-mono text-sm overflow-auto text-gray-300">
                {renderCodeWithHighlighting(currentCode)}
              </div>
            </div>

            <div className="flex-1 min-h-[350px] lg:min-h-0 flex flex-col">
              <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-gray-800">
                <span className="text-gray-500 text-sm font-mono">&gt;_</span>
                <span className="text-gray-400 text-sm font-mono">Terminal Output</span>
              </div>

              <div className="flex-1 p-4 font-mono text-sm bg-[#0d1117] overflow-auto">
                  <span className="block text-gray-500 font-mono pb-4">
                    # Click "Run Demo" to simulate API request
                  </span>

                {terminalSteps.slice(0, visibleSteps).map((step, index) => (
                  <div
                    key={index}
                    className={`mb-2 text-[#00ff88] font-mono`}
                  >
                    {step.type === "success" ? (
                      <>
                        <span className="text-[#00ff88] mr-2 font-mono">☑</span>
                        {step.text}
                      </>
                    ) : step.type === "id" ? (
                      <>
                        <span className="text-[#00ff88] mr-2 font-mono">&gt;</span>
                        {step.text}
                      </>
                    ) : (
                      <>
                        <span className="text-[#00ff88] mr-2 font-mono">&gt;</span>
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

              <div className="p-4 border-t border-gray-800 bg-[#161b22]">
                <button
                  onClick={handleRunDemo}
                  disabled={isRunning}
                  className="w-full py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 bg-transparent text-emerald-400 border border-emerald-500 hover:bg-[#00ff9d] hover:text-black hover:shadow-[0_0_20px_#00ff9d] disabled:opacity-50 disabled:cursor-not-allowed"
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
