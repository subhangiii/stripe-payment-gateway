const stripe = require('stripe')(
  'sk_test_51LUeGISHkNF8FoN5NlBeq1BDUW4YJrtWYNJsalP9NgSylldjkQCGkiUxlG7aFK7fnlBeCUUg1Y2PYArIieCNCu2m00D5Cy3x0a'
);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1LUuzBSHkNF8FoN5cgAUNMrh',
            quantity: 1,
          },
        ],
        mode: 'subscription',
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/cancel`,
      });
      res.redirect(303, session.url);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
