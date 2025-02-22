import Comments from "@/components/comments";

export default function CommentsPage() {
  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">అభిప్రాయాలు</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          మీ అభిప్రాయాలు మరియు సూచనలు మాకు చాలా విలువైనవి. మీ ఆలోచనలను మాతో
          పంచుకోండి.
        </p>
        <div className="mt-4">
          <a
            href="mailto:nishabdham.sh@gmail.com"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            ఈమెయిల్ ద్వారా సంప్రదించండి (nishabdham.sh@gmail.com)
          </a>

          <div className="my-2 text-gray-500">లేదా</div>
          <p className="text-gray-600 mb-4">క్రింది ఫారమ్ ని నింపి పంపండి</p>
        </div>
      </div>
      <Comments height={2000} />
    </div>
  );
}
