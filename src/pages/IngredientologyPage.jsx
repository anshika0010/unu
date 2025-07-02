import React from "react";
import Navbar from "../components/Navbar";

export default function IngredientologyPage() {
  const skinConcerns = [
    {
      id: "acne",
      title: "Acne & Blemishes",
      description:
        "Target breakouts, reduce inflammation, and prevent future blemishes with these proven ingredients.",
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-[var(--bg-acne)]",
      textColor: "text-green-800",
      ingredients: [
        {
          name: "Salicylic Acid",
          image:
            "https://plus.unsplash.com/premium_photo-1661380595317-387f3a795f16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
          type: "Beta Hydroxy Acid (BHA)",
          description:
            "A powerful exfoliant that penetrates deep into pores to dissolve oil and dead skin cells. Unlike other acids, salicylic acid is oil-soluble, making it perfect for acne-prone skin.",
          benefits: [
            "Unclogs pores and blackheads",
            "Reduces inflammation and redness",
            "Prevents future breakouts",
            "Smooths skin texture",
          ],
          howItWorks:
            "Salicylic acid works by breaking down the bonds between dead skin cells, allowing them to shed more easily. It also has anti-inflammatory properties that help calm irritated skin.",
          usage:
            "Start with 0.5% concentration 2-3 times per week, gradually increasing frequency. Always use sunscreen as it can increase photosensitivity.",
        },
        {
          name: "Niacinamide",
          image:
            "https://media.istockphoto.com/id/1828648524/photo/niacinamide-in-a-bottle-substances-used-for-treatment-or-medical-beauty-enhancement.jpg?s=1024x1024&w=is&k=20&c=dVr9xP60f4EHFDgNhCOFpmfskgnyXtOWmFqQr0EU8IA=",
          concentration: "5-10%",
          type: "Vitamin B3",
          description:
            "A versatile ingredient that regulates oil production, minimizes pores, and strengthens the skin barrier. Suitable for all skin types, including sensitive skin.",
          benefits: [
            "Controls excess oil production",
            "Minimizes appearance of pores",
            "Reduces redness and irritation",
            "Strengthens skin barrier",
          ],
          howItWorks:
            "Niacinamide regulates sebum production by affecting the sebaceous glands and helps maintain the skin's natural protective barrier.",
          usage:
            "Can be used twice daily. Compatible with most other ingredients including retinoids and vitamin C.",
        },
        {
          name: "Tea Tree Oil",
          image:
            "https://images.unsplash.com/photo-1622480916113-9000ac49b79d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVlJTIwdHJlZSUyMG9pbHxlbnwwfHwwfHx8MA%3D%3D",
          concentration: "1-5%",
          type: "Natural Essential Oil",
          description:
            "A natural antimicrobial ingredient derived from the Australian tea tree. Effective against acne-causing bacteria while being gentler than benzoyl peroxide.",
          benefits: [
            "Natural antibacterial properties",
            "Reduces acne-causing bacteria",
            "Soothes inflamed skin",
            "Less drying than synthetic alternatives",
          ],
          howItWorks:
            "Tea tree oil contains compounds like terpinen-4-ol that have antimicrobial properties, helping to eliminate P. acnes bacteria that contribute to breakouts.",
          usage:
            "Always use diluted (never pure). Start with lower concentrations to test tolerance. Avoid if you have tree nut allergies.",
        },
      ],
    },
    {
      id: "aging",
      title: "Anti-Aging & Fine Lines",
      description:
        "Combat signs of aging with scientifically-proven ingredients that boost collagen and protect against environmental damage.",
      color: "from-purple-400 to-violet-500",
      bgColor: "bg-[var(--bg-acne)]",
      textColor: "text-purple-800",
      ingredients: [
        {
          name: "Retinol",
          image:
            "https://media.istockphoto.com/id/1410875402/photo/vitamin-c-serum-in-a-bottle-with-a-pipette-on-a-round-dish-the-concept-of-anti-acid-autumn.webp?a=1&b=1&s=612x612&w=0&k=20&c=HqD0iJRdGAkH2jU8EDxxvb6JQebJm1FOANcfUQMi3TE=",
          concentration: "0.25-1%",
          type: "Vitamin A Derivative",
          description:
            "The gold standard in anti-aging skincare. Retinol accelerates cell turnover, stimulates collagen production, and improves skin texture and tone.",
          benefits: [
            "Reduces fine lines and wrinkles",
            "Improves skin texture and tone",
            "Stimulates collagen production",
            "Fades dark spots and hyperpigmentation",
          ],
          howItWorks:
            "Retinol converts to retinoic acid in the skin, which binds to specific receptors that regulate cell turnover and collagen synthesis.",
          usage:
            "Start with 0.25% every 3rd night, gradually increasing frequency. Always use sunscreen during the day. Avoid during pregnancy.",
        },
        {
          name: "Vitamin C",
          image:
            "https://images.unsplash.com/photo-1611073061835-e77b1b16d3f3?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          concentration: "10-20%",
          type: "L-Ascorbic Acid",
          description:
            "A potent antioxidant that brightens skin, protects against free radical damage, and stimulates collagen synthesis for firmer, more youthful skin.",
          benefits: [
            "Brightens and evens skin tone",
            "Protects against environmental damage",
            "Stimulates collagen production",
            "Fades dark spots and sun damage",
          ],
          howItWorks:
            "Vitamin C neutralizes free radicals and is essential for collagen synthesis. It also inhibits melanin production, helping to fade dark spots.",
          usage:
            "Best used in the morning under sunscreen. Start with 10% concentration. Store in a cool, dark place to prevent oxidation.",
        },
        {
          name: "Peptides",
          image:
            "https://images.unsplash.com/photo-1686009799252-a050bc211cea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVwdGlkZXN8ZW58MHx8MHx8fDA%3D",
          concentration: "2-5%",
          type: "Amino Acid Chains",
          description:
            "Short chains of amino acids that signal the skin to produce more collagen and elastin, resulting in firmer, more resilient skin.",
          benefits: [
            "Stimulates collagen and elastin production",
            "Improves skin firmness and elasticity",
            "Reduces appearance of fine lines",
            "Supports skin barrier function",
          ],
          howItWorks:
            "Peptides act as messengers, signaling skin cells to perform specific functions like producing collagen or repairing damage.",
          usage:
            "Can be used morning and evening. Compatible with most other ingredients. Look for products with multiple peptide types for best results.",
        },
      ],
    },
    {
      id: "hydration",
      title: "Hydration & Moisture",
      description:
        "Restore and maintain optimal skin hydration with these moisture-binding and barrier-strengthening ingredients.",
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-[var(--bg-acne)]",
      textColor: "text-blue-800",
      ingredients: [
        {
          name: "Hyaluronic Acid",
          image:
            "https://media.istockphoto.com/id/1089102820/photo/molecular-structure.webp?a=1&b=1&s=612x612&w=0&k=20&c=nfd_iNdFCOzUvVBkeL6tcdTvxcDdcnA2IQWG7FFL_G8=",
          concentration: "0.1-2%",
          type: "Humectant",
          description:
            "A powerful humectant that can hold up to 1,000 times its weight in water. Naturally found in skin, it provides intense hydration without heaviness.",
          benefits: [
            "Provides intense hydration",
            "Plumps skin and reduces fine lines",
            "Suitable for all skin types",
            "Lightweight, non-comedogenic",
          ],
          howItWorks:
            "Hyaluronic acid draws moisture from the environment and deeper skin layers to the surface, creating a moisture reservoir in the skin.",
          usage:
            "Apply to damp skin, then seal with moisturizer. Can be used morning and evening. Works well with all other ingredients.",
        },
        {
          name: "Ceramides",
          image:
            "https://media.istockphoto.com/id/2189607429/photo/sample-of-gel-bubbles-in-petri-dish-in-mocha-mousse-shades.webp?a=1&b=1&s=612x612&w=0&k=20&c=tWaIjlF9RMF-1uki1Hqzyx46SvjiCNFt0jouTYynwJ0=",
          concentration: "1-5%",
          type: "Lipid Molecules",
          description:
            "Essential lipids that make up 50% of the skin barrier. They help retain moisture and protect against environmental irritants.",
          benefits: [
            "Restores and strengthens skin barrier",
            "Prevents moisture loss",
            "Reduces sensitivity and irritation",
            "Improves skin texture",
          ],
          howItWorks:
            "Ceramides fill in the gaps between skin cells, creating a protective barrier that prevents water loss and keeps irritants out.",
          usage:
            "Ideal for daily use, especially beneficial for dry or compromised skin. Can be used with any other ingredients.",
        },
        {
          name: "Glycerin",
          image:
            "https://media.istockphoto.com/id/1163242867/photo/potato-face-mask-for-wrinkles-on-jute-bags-surface-i-e-potato-juice-well-mixed-with-glycerin.webp?a=1&b=1&s=612x612&w=0&k=20&c=q5mxniwneIhYkwNf3PIdwE3aH96ZL4SrZU0D7YgWjJU=",
          concentration: "5-15%",
          type: "Humectant",
          description:
            "A gentle, effective humectant that draws moisture to the skin. One of the most researched and proven moisturizing ingredients.",
          benefits: [
            "Attracts moisture to skin",
            "Improves skin barrier function",
            "Gentle for sensitive skin",
            "Enhances other ingredient absorption",
          ],
          howItWorks:
            "Glycerin draws water from the environment and deeper skin layers, while also helping to maintain the skin's natural moisture barrier.",
          usage:
            "Can be used daily, morning and evening. Works synergistically with other moisturizing ingredients.",
        },
      ],
    },
    {
      id: "sensitive",
      title: "Sensitive & Reactive Skin",
      description:
        "Calm irritation, reduce redness, and strengthen sensitive skin with these gentle, soothing ingredients.",
      color: "from-pink-400 to-rose-500",
      bgColor: "bg-[var(--bg-acne)]",
      textColor: "text-pink-800",
      ingredients: [
        {
          name: "Aloe Vera",
          image:
            "https://media.istockphoto.com/id/2189712112/photo/fresh-aloevera-or-fresh-aloevera-gel.webp?a=1&b=1&s=612x612&w=0&k=20&c=4RitOcF2MJ1Yf_Ln1mTYL7ipecl_V07bECD3TmlkLTk=",
          concentration: "5-95%",
          type: "Natural Plant Extract",
          description:
            "A time-tested natural ingredient with powerful anti-inflammatory and healing properties. Contains over 75 active compounds including vitamins, minerals, and amino acids.",
          benefits: [
            "Soothes irritation and inflammation",
            "Accelerates wound healing",
            "Provides lightweight hydration",
            "Contains natural antimicrobial compounds",
          ],
          howItWorks:
            "Aloe vera contains compounds like acemannan and salicylic acid that reduce inflammation and promote healing, while polysaccharides provide hydration.",
          usage:
            "Can be used multiple times daily. Look for products with high aloe content (70%+) for maximum benefits.",
        },
        {
          name: "Chamomile Extract",
          image:
            "https://media.istockphoto.com/id/1326947904/photo/chamomile-tea-in-a-glass-mug-on-a-rustic-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=g0Q128b1KyZdWfs-vdvvNGo5dyWn9GxJt_apoZWDUP0=",
          concentration: "1-10%",
          type: "Natural Plant Extract",
          description:
            "A gentle botanical extract with anti-inflammatory and antioxidant properties. Particularly effective for calming redness and irritation.",
          benefits: [
            "Reduces redness and inflammation",
            "Calms sensitive, reactive skin",
            "Provides antioxidant protection",
            "Promotes skin healing",
          ],
          howItWorks:
            "Chamomile contains compounds like chamazulene and bisabolol that have anti-inflammatory effects and help calm irritated skin.",
          usage:
            "Gentle enough for daily use. Particularly beneficial in evening routines to calm skin after daily environmental exposure.",
        },
        {
          name: "Colloidal Oatmeal",
          image:
            "https://media.istockphoto.com/id/463692865/photo/colloidal-oatmeal.webp?a=1&b=1&s=612x612&w=0&k=20&c=u2uiNtVh2Q6xhOZrXKsMdaXlPr6Fwm_KNNavF6aOGS4=",
          concentration: "1-5%",
          type: "Natural Grain Extract",
          description:
            "Finely ground oats that form a protective, soothing film on the skin. FDA-approved as a skin protectant for treating eczema and dry skin.",
          benefits: [
            "Creates protective barrier on skin",
            "Reduces itching and irritation",
            "Gently exfoliates dead skin",
            "Provides anti-inflammatory benefits",
          ],
          howItWorks:
            "Oat proteins and beta-glucans form a protective film while avenanthramides provide anti-inflammatory and anti-itch benefits.",
          usage:
            "Excellent for daily use, especially for those with eczema or very dry skin. Can be used in cleansers, masks, or moisturizers.",
        },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center overflow-hidden">
          {/* Background image layer */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://media.istockphoto.com/id/2153487520/photo/unique-photo-for-promotion-with-green-tea-and-experiment-utensils-blank-platform-in-center.jpg?s=2048x2048&w=is&k=20&c=vaoi0Zd2ASC3eUQ3zwsdJ8gNFAcHKHRSSTBEZCba63Q=')",
              backgroundSize: "cover",
            }}
          ></div>

          {/* Optional overlay if you want some readability */}
          <div className="absolute  backdrop-blur-sm"></div>

          <div className="relative max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-lg border border-gray-200">
              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-gray-700">
                Science-Backed Skincare Knowledge
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold  text-black mb-8 leading-tight">
              Ingredientology
            </h1>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                ✓ Dermatologist Reviewed
              </span>
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                ✓ Research-Based
              </span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                ✓ Safe Concentrations
              </span>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ingredients by Skin Concern
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Each skin concern requires specific ingredients with unique
                mechanisms of action. Learn about the most effective actives and
                how to use them safely.
              </p>
            </div>

            <div className="space-y-32">
              {skinConcerns.map((concern, concernIndex) => (
                <div key={concern.id} className="relative">
                  {/* Section Header */}
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-4 bg-white rounded-2xl px-8 py-6 shadow-xl border border-gray-100 mb-6">
                      <div
                        className={`w-16 h-16 rounded-full bg-gradient-to-r ${concern.color} flex items-center justify-center`}
                      >
                        <span className="text-2xl font-bold text-white">
                          {concernIndex + 1}
                        </span>
                      </div>
                      <div className="text-left">
                        <h3 className="text-3xl font-bold text-gray-900">
                          {concern.title}
                        </h3>
                        <p className="text-gray-600 mt-1">
                          {concern.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Ingredients */}
                  <div className="space-y-16">
                    {concern.ingredients.map((ingredient, ingredientIndex) => (
                      <div
                        key={ingredientIndex}
                        className={`${concern.bgColor} rounded-3xl p-8 md:p-12 shadow-md`}
                      >
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                          {/* Left Column */}
                          <div className="text-center lg:text-left">
                            <div className="relative mb-8">
                              <div className="w-full  mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl p-2">
                                <div className="w-full rounded-2xl overflow-hidden">
                                  <img
                                    src={ingredient.image || "/placeholder.svg"}
                                    alt={ingredient.name}
                                    className="w-[600px] object-cover"
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="space-y-4">
                              <h4 className="text-3xl font-bold text-gray-900">
                                {ingredient.name}
                              </h4>
                              <div
                                className={`inline-block ${concern.textColor} bg-white px-4 py-2 rounded-full text-sm font-semibold`}
                              >
                                {ingredient.type}
                              </div>
                              <p className="text-gray-700 text-lg leading-relaxed">
                                {ingredient.description}
                              </p>
                            </div>
                          </div>

                          {/* Right Column */}
                          <div className="space-y-8">
                            {/* Benefits */}
                            <div>
                              <h5 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span
                                  className={`w-3 h-3 rounded-full bg-gradient-to-r ${concern.color}`}
                                ></span>
                                Key Benefits
                              </h5>
                              <ul className="space-y-3">
                                {ingredient.benefits.map(
                                  (benefit, benefitIndex) => (
                                    <li
                                      key={benefitIndex}
                                      className="flex items-start gap-3"
                                    >
                                      <span
                                        className={`w-2 h-2 rounded-full bg-gradient-to-r ${concern.color} mt-2 flex-shrink-0`}
                                      ></span>
                                      <span className="text-gray-700">
                                        {benefit}
                                      </span>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>

                            {/* How It Works */}
                            <div>
                              <h5 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span
                                  className={`w-3 h-3 rounded-full bg-gradient-to-r ${concern.color}`}
                                ></span>
                                How It Works
                              </h5>
                              <p className="text-gray-700 leading-relaxed bg-white/70 p-4 rounded-xl">
                                {ingredient.howItWorks}
                              </p>
                            </div>

                            {/* Usage Guidelines */}
                            <div>
                              <h5 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span
                                  className={`w-3 h-3 rounded-full bg-gradient-to-r ${concern.color}`}
                                ></span>
                                Usage Guidelines
                              </h5>
                              <p className="text-gray-700 leading-relaxed bg-white/70 p-4 rounded-xl">
                                {ingredient.usage}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Divider Between Concerns */}
                  {concernIndex < skinConcerns.length - 1 && (
                    <div className="relative my-16">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-yellow-300 to-transparent"></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Usage Guidelines Section */}
        <section
          className="py-8 px-4 bg-[#129bd6]
        "
        >
          <div className="max-w-6xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Essential Usage Guidelines
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Follow these expert guidelines to maximize ingredient
              effectiveness while minimizing irritation.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Start Slowly</h3>
                <p className="text-gray-300 leading-relaxed">
                  Introduce one new active ingredient at a time. Start with
                  lower concentrations and gradually increase frequency as your
                  skin builds tolerance.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Patch Test First</h3>
                <p className="text-gray-300 leading-relaxed">
                  Always patch test new ingredients on a small area of skin for
                  24-48 hours before full application to check for adverse
                  reactions.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Layer Correctly</h3>
                <p className="text-gray-300 leading-relaxed">
                  Apply products from thinnest to thickest consistency. Use
                  actives on clean skin, followed by moisturizer and sunscreen
                  during the day.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 text-center bg-gradient-to-br from-white to-blue-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Build Your Perfect Routine?
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Now that you understand the science behind skincare ingredients,
              it's time to create a personalized routine that addresses your
              specific concerns.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Shop by Ingredient
              </button>
              <button className="border-3 border-gray-300 text-gray-700 px-10 py-4 rounded-full text-lg font-bold hover:border-purple-600 hover:text-purple-600 hover:shadow-lg transition-all duration-300">
                Take Skin Analysis Quiz
              </button>
            </div>

            <div className="mt-12 text-sm text-gray-500">
              <p>
                💡 <strong>Pro Tip:</strong> Consult with a dermatologist before
                starting any new skincare routine, especially if you have
                sensitive skin or existing skin conditions.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
