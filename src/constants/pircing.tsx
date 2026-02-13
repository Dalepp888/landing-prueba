import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import GroupsIcon from "@mui/icons-material/Groups";
import LanguageIcon from "@mui/icons-material/Language";
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';


interface Plan {
    id: string;
    level: string;
    name: string;
    price: string;
    unitPrice: string;
    icon: React.ReactElement<{ className?: string }>;
    features: string[];
    buttonText: string;
    isPopular?: boolean;
    isFree?: boolean;
    isGuild?: boolean;
    isLegend?: boolean
}

export const plans: Plan[] = [
    {
        id: "explorer",
        level: "Nivel 1",
        name: "Explorador",
        price: "GRATIS",
        unitPrice: "0 CUP",
        icon: <PersonOutlineIcon className="text-white" sx={{ fontSize: 28 }} />,
        features: [
            "5 SMS de Prueba",
            "API Básica",
            "Soporte Email",
            "Dashboard Lite",
        ],
        buttonText: "Comenzar Aventura",
        isFree: true,
    },
    {
        id: "squad",
        level: "Nivel 2",
        name: "Squad",
        price: "6,000 CUP",
        unitPrice: "6 CUP/sms",
        icon: <GroupsIcon className="text-emerald-400" sx={{ fontSize: 28 }} />,
        features: [
            "1,000 SMS",
            "API Full Access",
            "Soporte WhatsApp",
            "Analytics Básico",
            "3 Usuarios",
        ],
        buttonText: "Desbloquear",
        isPopular: true,
    },
    {
        id: "guild",
        level: "Nivel 3",
        name: "Guild",
        price: "27,500 CUP",
        unitPrice: "5.5 CUP/sms",
        icon: <LanguageIcon className="text-emerald-400" sx={{ fontSize: 28 }} />,
        features: [
            "5,000 SMS",
            "Webhooks",
            "Soporte Prioritario",
            "Exportación CSV",
            "Usuarios Ilimitados",
        ],
        buttonText: "Desbloquear",
        isGuild: true
    },
    {
        id: "legend",
        level: "Nivel 4",
        name: "Leyenda",
        price: "50,000 CUP",
        unitPrice: "5 CUP/sms",
        icon: <ElectricBoltIcon className="text-emerald-400" sx={{ fontSize: 28 }} />,
        features: [
            "10,000 SMS",
            "IP Dedicada",
            "SLA Garantizado",
            "Account Manager",
            "Auditoría Log",
        ],
        buttonText: "Desbloquear",
        isLegend: true
    },
];