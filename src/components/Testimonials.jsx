import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Product Manager',
    company: 'Nimbus Labs',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    quote:
      'MrPedro shipped our analytics dashboard ahead of schedule. The code was clean, well-typed, and easy to extend. He thinks like a product owner, not just a developer.',
    rating: 5,
  },
  {
    name: 'David Okafor',
    role: 'Founder',
    company: 'Marketplace Hub',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    quote:
      'From the database schema to the checkout flow, Pedro owned the entire stack. Our marketplace went from idea to revenue in under two months.',
    rating: 5,
  },
  {
    name: 'Lena Fischer',
    role: 'CTO',
    company: 'ChatLoop',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
    quote:
      'One of the rare fullstack devs who genuinely cares about UX. Realtime features worked flawlessly and the codebase is a joy for our team to maintain.',
    rating: 5,
  },
  {
    name: 'Marcus Reyes',
    role: 'Engineering Lead',
    company: 'TaskFlow',
    avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=200',
    quote:
      'Pedro mentored two of our junior engineers while delivering a complex kanban refactor. Communication was proactive and the PRs were immaculate.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-blob" />
      <div className="section-pad container">
        <div className="section-header reveal">
          <p className="section-label" style={{ marginBottom: '0.75rem' }}>Testimonials</p>
          <h2 className="section-title">What clients say about working with me</h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <figure key={t.name} className="testimonial-card reveal">
              <Quote size={32} className="testimonial-quote-icon" />
              <blockquote className="testimonial-quote">
                "{t.quote}"
              </blockquote>
              <div className="testimonial-foot">
                <img src={t.avatar} alt={t.name} loading="lazy" className="testimonial-avatar" />
                <div className="testimonial-info">
                  <figcaption className="testimonial-name">{t.name}</figcaption>
                  <p className="testimonial-role">{t.role} · {t.company}</p>
                </div>
                <div className="testimonial-stars">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} className="testimonial-star" />
                  ))}
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
