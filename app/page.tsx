"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import heroImage from "@/public/images/hero.png"
import {
  BookOpen,
  Brain,
  BrainCircuit,
  Film,
  Layout,
  Library,
  Music,
  Pencil,
  PenTool,
  Zap,
} from "lucide-react"

import { PageRoutes } from "@/lib/pageroutes"
import { buttonVariants } from "@/components/ui/button"

const features = [
  {
    title: "ఆలోచనలు",
    description: "మనసులో మెదిలే భావాలు మరియు జ్ఞాపకాలు చూడండి.",
    icon: <Brain className="h-6 w-6 text-gray-900" />,
    gradient: "from-blue-500 to-cyan-400",
    path: "/docs/alochanalu",
  },
  {
    title: "కవితలు",
    description: "హృదయం నుండి జాలువారే మధురమైన పద్య రచన.",
    icon: <PenTool className="h-6 w-6" />,
    gradient: "from-purple-500 to-pink-400",
    path: "/docs/kavitalu",
  },
  {
    title: "కథలు",
    description: "జీవితంలో జరిగే అనుభవాల కథల సంకలనం.",
    icon: <Layout className="h-6 w-6" />,
    gradient: "from-orange-500 to-red-400",
    path: "/docs/kathalu",
  },
  {
    title: "సాహిత్యం",
    description: "తెలుగు సాహిత్య విశ్లేషణలు మరియు అభిప్రాయాలు.",
    icon: <Library className="h-6 w-6" />,
    gradient: "from-green-500 to-emerald-400",
    path: "/docs/sahityam",
  },
  {
    title: "పుస్తకాలు",
    description: "పుస్తకాల సమీక్షలు మరియు ముఖ్య విషయాలు.",
    icon: <BookOpen className="h-6 w-6" />,
    gradient: "from-yellow-500 to-amber-400",
    path: "/docs/pustakalu",
  },
  {
    title: "ప్రేరణ",
    description: "జీవితంలో ముందుకు సాగడానికి మంచి మాటలు.",
    icon: <Zap className="h-6 w-6" />,
    gradient: "from-indigo-500 to-violet-400",
    path: "/docs/prerana",
  },
  {
    title: "తర్కం",
    description: "హేతుబద్ధమైన ఆలోచనలు మరియు తార్కిక విషయాలు.",
    icon: <BrainCircuit className="h-6 w-6" />,
    gradient: "from-rose-500 to-pink-400",
    path: "/docs/tarkam",
  },
  {
    title: "సినిమాలు",
    description: "చలనచిత్రాల సమీక్షలు మరియు ముఖ్య అంశాలు.",
    icon: <Film className="h-6 w-6" />,
    gradient: "from-teal-500 to-cyan-400",
    path: "/docs/cinemalu",
  },
]

const thoughts = [
  {
    title: "ఆలోచనలు",
    icon: <Brain className="h-6 w-6" />,
    thoughts: [
      "మన జీవితంలో ప్రతి క్షణం ఒక ఆలోచన",
      "ఆలోచనలే మన భవిష్యత్తుకు బాటలు",
      "మనసులో మెదిలే ప్రతి ఆలోచన ఒక అనుభవం",
      "ఆలోచనల ద్వారా జీవితాన్ని అర్థం చేసుకోవడం",
    ],
  },
  {
    title: "కవితలు",
    icon: <PenTool className="h-6 w-6" />,
    thoughts: [
      "కవిత అనేది హృదయ స్పందన",
      "పదాల ద్వారా భావాల వ్యక్తీకరణ",
      "కవిత్వంలో దాగిన జీవిత సత్యాలు",
      "అక్షరాల నుండి ఆవిష్కృతమయ్యే అనుభూతులు",
    ],
  },
  {
    title: "కథలు",
    icon: <Layout className="h-6 w-6" />,
    thoughts: [
      "ప్రతి కథ ఒక జీవితం",
      "అనుభవాలే కథలుగా మారతాయి",
      "కథల ద్వారా జీవిత పాఠాలు",
      "మన చుట్టూ ఉన్న ప్రతిదీ ఒక కథ",
    ],
  },
  {
    title: "సాహిత్యం",
    icon: <Library className="h-6 w-6" />,
    thoughts: [
      "సాహిత్యం సమాజ దర్పణం",
      "అక్షరాలలో దాగిన సంస్కృతి",
      "చదవడం ద్వారా జ్ఞానార్జన",
      "సాహిత్యం మానవ జీవన విధానానికి మార్గదర్శి",
    ],
  },
  {
    title: "పుస్తకాలు",
    icon: <BookOpen className="h-6 w-6" />,
    thoughts: [
      "పుస్తకం ఒక గురువు",
      "జ్ఞానానికి నిలయం పుస్తకాలు",
      "చదివిన ప్రతి పుస్తకం ఒక అనుభవం",
      "పుస్తకాలు మన ఆలోచనా విధానాన్ని మలుస్తాయి",
    ],
  },
  {
    title: "ప్రేరణ",
    icon: <Zap className="h-6 w-6" />,
    thoughts: [
      "ప్రేరణ జీవితానికి ఊపిరి",
      "ప్రతి అడుగులో ప్రేరణ అవసరం",
      "విజయానికి ప్రేరణ మూలం",
      "ప్రేరణ లేని జీవితం నిస్సార",
    ],
  },
  {
    title: "తర్కం",
    icon: <BrainCircuit className="h-6 w-6" />,
    thoughts: [
      "తర్కం మేధస్సుకు పదును",
      "హేతుబద్ధమైన ఆలోచన అవసరం",
      "తర్కం లేని నిర్ణయం అపరిపక్వం",
      "తార్కిక చింతన జీవితానికి దిక్సూచి",
    ],
  },
  {
    title: "సినిమాలు",
    icon: <Film className="h-6 w-6" />,
    thoughts: [
      "సినిమా సమాజానికి అద్దం",
      "కళా రూపంలో జీవిత దర్శనం",
      "సినిమా ద్వారా సామాజిక చైతన్యం",
      "చలన చిత్రం సమాజానికి సందేశం",
    ],
  },
  {
    title: "సంగీతం",
    icon: <Music className="h-6 w-6" />,
    thoughts: [
      "సంగీతం ఆత్మకు ఆహ్లాదం",
      "స్వరాల మాధుర్యంలో జీవితం",
      "సంగీతం భావోద్వేగాల భాష",
      "లయబద్ధమైన జీవన సంగీతం",
    ],
  },
]

const motivation = [
  {
    icon: <Brain className="h-6 w-6" />,
    title: "జ్ఞానం",
    quote: "సాహిత్యం మానవ జీవితాన్ని ప్రతిబింబించే అద్దం",
    author: "చలం - మైదానం",
  },
  {
    icon: <PenTool className="h-6 w-6" />,
    title: "కథ",
    quote: "కథ మనిషి జీవితంలో ఒక భాగం, జీవితం కథలో ఒక భాగం",
    author: "బుచ్చిబాబు",
  },
  {
    icon: <Layout className="h-6 w-6" />,
    title: "సాహిత్యం",
    quote: "మంచి రచన పాఠకుల హృదయాలను తాకాలి, మనసులను కదిలించాలి",
    author: "కొడవటిగంటి కుటుంబరావు",
  },
  {
    icon: <Library className="h-6 w-6" />,
    title: "కథనం",
    quote: "ప్రతి మనిషి జీవితం ఒక కథ, దానిని చెప్పడమే కళ",
    author: "శ్రీ శ్రీ",
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "రచన",
    quote: "మాటలు మౌనాన్ని భంగపరుస్తాయి, కానీ రచన మౌనాన్ని అర్థవంతం చేస్తుంది",
    author: "గురజాడ అప్పారావు",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "భావన",
    quote: "కలం నుండి జారే ప్రతి అక్షరం ఒక భావన, ప్రతి పదం ఒక అనుభూతి",
    author: "దాశరథి రంగాచార్య",
  },
  {
    icon: <BrainCircuit className="h-6 w-6" />,
    title: "సృజన",
    quote: "రచయిత కలం నుండి జన్మించే ప్రతి అక్షరం సమాజానికి దీపం",
    author: "విశ్వనాథ సత్యనారాయణ",
  },
  {
    icon: <Film className="h-6 w-6" />,
    title: "కవిత",
    quote: "కవిత్వం హృదయం నుండి ప్రవహించే అమృతధార",
    author: "దేవులపల్లి కృష్ణశాస్త్రి",
  },
  {
    icon: <Pencil className="h-6 w-6" />,
    title: "అనుభూతి",
    quote: "సాహిత్యం మానవ మనస్తత్వాన్ని అర్థం చేసుకునే కళ",
    author: "శ్రీపాద సుబ్రహ్మణ్య శాస్త్రి",
  },
]

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="p-2">
      <h1 className="text-4xl font-bold mb-4 sm:text-7xl flex flex-col items-center gap-2">
        <Image
          src={heroImage}
          alt="Hero image"
          width={200}
          height={200}
          className="rounded-full mb-2 glow-[#FFD700]"
          priority
        />
        <span className="text-gray-800 -mt-12 bg-clip-text py-[2px] leading-relaxed">
          నా ఆలోచనల ప్రపంచం
        </span>
      </h1>
      <p className="max-w-[800px] text-gray-800 mb-4 italic text-base sm:text-lg md:text-xl">
        &quot;నిశ్శబ్దం నుండి జన్మించే ఆలోచన, ఆలోచన నుండి పుట్టే అక్షరం - ఇదే నా
        రచనా ప్రస్థానం&quot;
      </p>
      <p className="max-w-[800px] text-gray-700 mb-8 text-sm sm:text-base md:text-lg">
        నా మనసులో దాగిన భావాలు, నా ఆలోచనల ప్రవాహం. నా అనుభూతులు, కల్పనలు, కవితలు
        మరియు కథనాలు. సమాజం పట్ల నా దృక్పథం, నా హృదయం నుండి జాలువారే రచనలు.
      </p>
      <div className="flex items-center justify-center gap-5 mb-8">
        <Link
          href={`/docs${PageRoutes[0].href}`}
          className={buttonVariants({
            className: "px-8 py-3 bg-black text-white hover:bg-gray-800",
            size: "lg",
          })}
        >
          మరింత తెలుసుకోండి →
        </Link>
      </div>
    </section>
  )
}

// Features Section Component
const FeaturesSection = () => {
  return (
    <section className="p-10">
      <div className="w-full">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          నా రచనల ప్రపంచం
        </h2>
        <div className="text-lg text-gray-700 w-full mb-12 text-center">
          నా రచనల ప్రపంచానికి స్వాగతం. ఇక్కడ నేను రాసిన కవితలు, కథలు చదవొచ్చు.
          నా రచనలన్నీ నా అనుభవాలతో, నా మనసులోని భావాలతో రాశాను. చదివి
          ఆనందించండి.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Link href={feature.path} key={index}>
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow hover:scale-[1.03] active:scale-[0.98]">
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center gap-2 mb-2">
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// Thoughts Section Component
const ThoughtsSection = () => {
  return (
    <section className="p-10">
      <div className="w-full">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          ఆలోచనా ప్రవాహాలు
        </h2>
        <div className="text-lg text-gray-700 w-full mb-12 text-center">
          ప్రతి ఆలోచనా ధోరణి మన అవగాహనను విస్తృతం చేస్తుంది. వివిధ కోణాల నుండి
          విషయాలను అర్థం చేసుకోవడం ద్వారా మన దృక్పథం సమగ్రమవుతుంది.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {thoughts.map((thought, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  {thought.icon}
                  <h3 className="text-xl font-semibold text-gray-800">
                    {thought.title}
                  </h3>
                </div>
                <ul className="list-disc space-y-2 text-left pl-4">
                  {thought.thoughts.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-600 text-left">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Motivation Section Component
const MotivationSection = () => {
  return (
    <section className="p-10">
      <div className="w-full">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          సాహిత్య ప్రేరణ
        </h2>
        <div className="text-lg text-gray-700 w-full mb-12 text-center">
          రచన అనేది మన మనసు నుండి ప్రవహించే భావధార. అక్షరాల ద్వారా మన అనుభూతులు
          అనంతకాలం జీవించగలవు. ప్రతి పదం వెనుక ఒక కథ, ప్రతి వాక్యం వెనుక ఒక
          అనుభవం దాగి ఉంటుంది.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {motivation.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-200"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                {item.icon}
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
              </div>
              <blockquote className="border-l-4 border-gray-200 pl-4 italic">
                <p className="text-gray-600 mb-2">{item.quote}</p>
                <footer className="text-sm text-gray-500">
                  — {item.author}
                </footer>
              </blockquote>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function Home() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("/service-worker.js").then(
          (registration) => {
            console.log(
              "Service Worker registered with scope:",
              registration.scope
            )
          },
          (error) => {
            console.error("Service Worker registration failed:", error)
          }
        )
      })
    }
  }, [])

  return (
    <div className="min-h-[86.5vh] flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-50 to-purple-50 font-sans">
      <HeroSection />
      <FeaturesSection />
      <ThoughtsSection />
      <MotivationSection />
    </div>
  )
}
