export type Language = "javascript" | "python" | "php";

interface CodeExample {
  language: Language;
  label: string;
  code: string;
}

export const codeExamples: CodeExample[] = [
  {
    language: "javascript",
    label: "JAVASCRIPT",
    code: `<span class="text-gray-500">// Instalar: npm install smscuba-otp</span>

<span class="text-purple-400">import</span> { SMSCuba } <span class="text-purple-400">from</span> 'smscuba-otp';

<span class="text-purple-400">const</span> client = <span class="text-purple-400">new</span> SMSCuba('sk_live_...');

<span class="text-purple-400">async function</span> sendOTP() {
  <span class="text-purple-400">const</span> result = <span class="text-purple-400">await</span> client.send({
    phone: '+5352889900',
    message: 'Tu código es: {{code}}'
  });
  
  console.log('Enviado! ID: $ {result.id}');
}`,
  },
  {
    language: "python",
    label: "PYTHON",
    code: `<span class="text-gray-500"># Instalar: pip install smscuba-otp</span>

<span class="text-purple-400">from</span> smscuba <span class="text-purple-400">import</span> SMSCuba

client = SMSCuba('sk_live_...')

result = client.send(
    phone='+5352889900',
    message='Tu código es: {{code}}'
)

print(f"Enviado! ID: {result.id}")
`,
  },
  {
    language: "php",
    label: "PHP",
    code: `<span class="text-gray-500">// Instalar: composer require smscuba/otp</span>

<span class="text-purple-400">use</span> SMSCuba\Client;

$client = <span class="text-purple-400">new</span> Client('sk_live_...');

$result = $client->send([
    'phone' => '+5352889900',
    'message' => 'Tu código es: {{code}}'
]);

echo "Enviado! ID: " . $result->id;
`,
  },
];

interface TerminalStep {
  text: string;
  type: "info" | "success" | "id";
  delay: number;
}

export const terminalSteps: TerminalStep[] = [
  { text: "Initializing connection...", type: "info", delay: 0 },
  { text: "Authenticating with API...", type: "info", delay: 600 },
  { text: "Sending request to endpoint...", type: "info", delay: 1200 },
  { text: "Success! Message delivered in 145ms", type: "success", delay: 1800 },
  { text: "ID: msg_8f92j92", type: "id", delay: 2200 },
];