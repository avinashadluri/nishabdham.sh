"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Layout,
  Zap,
  Brain,
  PenTool,
  BookOpen,
  Library,
  BrainCircuit,
  Film,
  Users,
  Lightbulb,
  Calendar,
  Cpu,
  ScrollText,
  Heart,
  Edit3,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  const features = [
    {
      title: "ఆలోచనలు",
      description: "నా మనసులోని ఆలోచనలు మరియు అనుభవాలు.",
      icon: <Brain className="h-6 w-6" />,
      gradient: "from-blue-500 to-cyan-400",
      path: "/alochanalu",
    },
    {
      title: "కవితలు",
      description: "నా హృదయం నుండి ప్రవహించే కవిత్వం.",
      icon: <PenTool className="h-6 w-6" />,
      gradient: "from-purple-500 to-pink-400",
      path: "/kavithalu",
    },
    {
      title: "కథలు",
      description: "జీవితం నుండి నేర్చుకున్న అనుభవాల కథనం.",
      icon: <Layout className="h-6 w-6" />,
      gradient: "from-orange-500 to-red-400",
      path: "/kathalu",
    },
    {
      title: "సాహిత్యం",
      description: "తెలుగు సాహిత్యంపై నా అభిప్రాయాలు, విశ్లేషణలు.",
      icon: <Library className="h-6 w-6" />,
      gradient: "from-green-500 to-emerald-400",
      path: "/sahityam",
    },
    {
      title: "పుస్తకాలు",
      description: "చదివిన పుస్తకాల అనుభూతులు, సమీక్షలు.",
      icon: <BookOpen className="h-6 w-6" />,
      gradient: "from-yellow-500 to-amber-400",
      path: "/pustakalu",
    },
    {
      title: "ప్రేరణ",
      description: "జీవితంలో ముందుకు సాగడానికి ప్రేరణ నిచ్చే ఆలోచనలు.",
      icon: <Zap className="h-6 w-6" />,
      gradient: "from-indigo-500 to-violet-400",
      path: "/prerana",
    },
    {
      title: "తర్కం",
      description: "హేతుబద్ధమైన ఆలోచన, తార్కిక విశ్లేషణలు.",
      icon: <BrainCircuit className="h-6 w-6" />,
      gradient: "from-rose-500 to-pink-400",
      path: "/tarkam",
    },
    {
      title: "సినిమాలు",
      description: "చలనచిత్రాలపై సమీక్షలు, విశ్లేషణలు.",
      icon: <Film className="h-6 w-6" />,
      gradient: "from-teal-500 to-cyan-400",
      path: "/cinemalu",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200"
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center space-x-2"
            >
              <Link href="/" className="flex items-center">
                <span className="font-bold text-xl text-gray-900">
                  నిశ్శబ్దం
                </span>
              </Link>
            </motion.div>

            <nav className="flex items-center space-x-6">
              <div className="hidden md:flex space-x-6">
                <Link
                  href="/nenu"
                  className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                >
                  నా గురించి
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </motion.header>

      <main className="flex-grow pt-16">
        <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                నిశ్శబ్దం{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-400 px-4 py-2">
                  నా ఆలోచనల ప్రపంచం
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto mt-4">
                నాలోని నిశ్శబ్దం, చెవికి వినిపించని శబ్దం, అనేక ఆలోచనల సముద్రం.
                నా మనసులో మెదిలే భావాల అక్షరీకరణ, సమాజంపై విశ్లేషణలు. హృదయం
                నుండి ప్రవహించే భావ సంగమం, వ్యంగ్య కవితలు. అనుభవాల నుండి పుట్టిన
                కథనాలు, సామాజిక స్పృహతో కూడిన రచనలు.
              </p>
              <Button size="lg" asChild className="mr-4">
                <Link href="/nenu">
                  మరింత తెలుసుకోండి <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
        <section className="py-20 bg-gray-100 shadow-lg">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              ఆలోచనా ప్రవాహాలు
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <Brain className="h-6 w-6 mr-2 text-gray-700" />
                  <h3 className="text-xl font-semibold">తార్కిక విశ్లేషణ</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li>• హేతుబద్ధ ఆలోచనా విధానం</li>
                  <li>• తార్కిక విశ్లేషణ</li>
                  <li>• నిర్ణయాల నైపుణ్యం</li>
                  <li>• మానసిక సమతుల్యత</li>
                  <li>• వ్యక్తిత్వ విశ్లేషణ</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <Lightbulb className="h-6 w-6 mr-2 text-gray-700" />
                  <h3 className="text-xl font-semibold">ఆలోచనా విధానాలు</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li>• విశ్లేషణాత్మక ఆలోచన</li>
                  <li>• సృజనాత్మక ఆలోచన</li>
                  <li>• విమర్శనాత్మక ఆలోచన</li>
                  <li>• సమగ్ర ఆలోచన</li>
                  <li>• అంతర్దృష్టి ఆధారిత ఆలోచన</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <Users className="h-6 w-6 mr-2 text-gray-700" />
                  <h3 className="text-xl font-semibold">మానవ స్వభావం</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li>• వ్యక్తిత్వ లక్షణాలు</li>
                  <li>• మానవ సంబంధాలు</li>
                  <li>• సామాజిక ప్రవర్తన</li>
                  <li>• జీవన విధానాలు</li>
                  <li>• మానసిక స్థితిగతులు</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 mr-2 text-gray-700" />
                  <h3 className="text-xl font-semibold">నిత్య జీవితం</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li>• వ్యక్తిగత బాధ్యతలు</li>
                  <li>• పరస్పర సహకారం</li>
                  <li>• స్వయం ఆధారిత నిర్ణయాలు</li>
                  <li>• లక్ష్య సాధన</li>
                  <li>• వాస్తవిక జీవనం</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <BookOpen className="h-6 w-6 mr-2 text-gray-700" />
                  <h3 className="text-xl font-semibold">పుస్తకాలు</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li>• నవలలు</li>
                  <li>• కథా సంకలనాలు</li>
                  <li>• కవితా సంపుటాలు</li>
                  <li>• జీవిత చరిత్రలు</li>
                  <li>• వ్యాస సంకలనాలు</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <Cpu className="h-6 w-6 mr-2 text-gray-700" />
                  <h3 className="text-xl font-semibold">సాంకేతిక ప్రపంచం</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li>• డిజిటల్ పరివర్తన</li>
                  <li>• సాంకేతిక ఆవిష్కరణలు</li>
                  <li>• ప్రపంచీకరణ</li>
                  <li>• పర్యావరణ సాంకేతికత</li>
                  <li>• భవిష్యత్ ప్రపంచం</li>
                </ul>
              </motion.div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                ప్రతి ఆలోచనా ధోరణి మన అవగాహనను విస్తృతం చేస్తుంది. వివిధ కోణాల
                నుండి విషయాలను అర్థం చేసుకోవడం ద్వారా మన దృక్పథం సమగ్రమవుతుంది.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              సాహిత్య ప్రేరణ కోసం కొన్ని మధుర వాక్యాలు...
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="flex items-center gap-3 mb-3">
                  <PenTool className="h-5 w-5 text-gray-600" />
                  <h3 className="text-xl font-semibold">చలం</h3>
                </div>
                <p className="text-gray-600 italic mb-4">
                  &quot;సాహిత్యం మానవ జీవితాన్ని ప్రతిబింబించే అద్దం&quot;
                </p>
                <div className="text-sm text-gray-500">- మైదానం</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="flex items-center gap-3 mb-3">
                  <BookOpen className="h-5 w-5 text-gray-600" />
                  <h3 className="text-xl font-semibold">బుచ్చిబాబు</h3>
                </div>
                <p className="text-gray-600 italic mb-4">
                  &quot;కథ మనిషి జీవితంలో ఒక భాగం, జీవితం కథలో ఒక భాగం&quot;
                </p>
                <div className="text-sm text-gray-500">- చివరకు మిగిలేది</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="flex items-center gap-3 mb-3">
                  <ScrollText className="h-5 w-5 text-gray-600" />
                  <h3 className="text-xl font-semibold">
                    కొడవటిగంటి కుటుంబరావు
                  </h3>
                </div>
                <p className="text-gray-600 italic mb-4">
                  &quot;సాహిత్యం సమాజానికి దర్పణం, భవిష్యత్తుకు మార్గదర్శి&quot;
                </p>
                <div className="text-sm text-gray-500">- అర్థరాత్రి</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Library className="h-5 w-5 text-gray-600" />
                  <h3 className="text-xl font-semibold">
                    కేతు విశ్వనాథ రెడ్డి
                  </h3>
                </div>
                <p className="text-gray-600 italic mb-4">
                  &quot;పుస్తకం ఒక ప్రపంచం, ప్రతి పేజీ ఒక ప్రయాణం&quot;
                </p>
                <div className="text-sm text-gray-500">
                  - అమృతం కురిసిన రాత్రి
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Heart className="h-5 w-5 text-gray-600" />
                  <h3 className="text-xl font-semibold">
                    యద్దనపూడి సులోచనారాణి
                  </h3>
                </div>
                <p className="text-gray-600 italic mb-4">
                  &quot;రచన ఆత్మ యొక్క అభివ్యక్తి, మనసు యొక్క ప్రతిధ్వని&quot;
                </p>
                <div className="text-sm text-gray-500">- మల్లెపూల దండ</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Edit3 className="h-5 w-5 text-gray-600" />
                  <h3 className="text-xl font-semibold">
                    యండమూరి వీరేంద్రనాథ్
                  </h3>
                </div>
                <p className="text-gray-600 italic mb-4">
                  &quot;కథ అనేది జీవితం యొక్క ప్రతిబింబం, మానవ మనస్తత్వం యొక్క
                  అన్వేషణ&quot;
                </p>
                <div className="text-sm text-gray-500">- తులసి దళం</div>
              </motion.div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                రచన అనేది మన మనసు నుండి ప్రవహించే భావధార. అక్షరాల ద్వారా మన
                అనుభూతులు అనంతకాలం జీవించగలవు. ప్రతి పదం వెనుక ఒక కథ, ప్రతి
                వాక్యం వెనుక ఒక అనుభవం దాగి ఉంటుంది.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              నా రచనల ప్రపంచం
            </h2>
            <div className="text-lg text-gray-700 max-w-3xl mx-auto mb-12 text-center">
              నా రచనల ప్రపంచంలోకి స్వాగతం. ఇక్కడ మీరు నా కవితలు, కథలు, వ్యాసాలు
              మరియు అనువాదాలను చదవవచ్చు. ప్రతి రచన వెనుక ఒక అనుభవం, ఒక ఆలోచన,
              మరియు హృదయపూర్వక భావన ఉంటుంది. ఈ సాహిత్య ప్రయాణంలో నాతో కలిసి
              నడవండి.
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Link href={`${feature.path}`} key={feature.path}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <Card className="relative overflow-hidden border-0 bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
                      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                      <CardHeader className="relative z-10">
                        <div className="flex items-center gap-4">
                          <div
                            className={`p-3 rounded-lg bg-gradient-to-br ${feature.gradient} w-fit`}
                          >
                            <div className="text-white">{feature.icon}</div>
                          </div>
                          <CardTitle className="text-xl font-semibold">
                            {feature.title}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-sm text-gray-600 leading-relaxed">
                          {feature.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <blockquote className="max-w-3xl mx-auto">
              <p className="text-2xl font-medium text-gray-900 mb-4">
                &ldquo;మౌనంలో దాగిన అర్థం, శబ్దంలో దాగిన నిశ్శబ్దం - ఇదే నా రచనల
                ప్రత్యేకత&rdquo;
              </p>
              <footer className="text-gray-600">— నిశ్శబ్దం</footer>
            </blockquote>
          </div>
        </section>
      </main>

      <footer className="border-t py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <span className="font-bold text-xl">నిశ్శబ్దం</span>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="mailto:nishabdham.sh@gmail.com"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                nishabdham.sh@gmail.com
              </a>
              <div className="text-sm text-gray-600">© 2025 నిశ్శబ్దం.</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
