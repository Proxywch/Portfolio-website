
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                I'm always interested in new opportunities, challenging projects, and meaningful collaborations. 
                Whether you have a project in mind or just want to chat about technology, I'd love to hear from you!
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-green-500/20 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <div className="text-white font-semibold">Email</div>
                  <div className="text-slate-300">your.email@example.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-green-500/20 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <div className="text-white font-semibold">Phone</div>
                  <div className="text-slate-300">+1 (555) 123-4567</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-green-500/20 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <div className="text-white font-semibold">Location</div>
                  <div className="text-slate-300">Your City, Country</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">First Name</label>
                  <Input 
                    type="text" 
                    placeholder="John"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-green-400"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Last Name</label>
                  <Input 
                    type="text" 
                    placeholder="Doe"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-green-400"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-2">Email</label>
                <Input 
                  type="email" 
                  placeholder="john@example.com"
                  className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-green-400"
                />
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-2">Subject</label>
                <Input 
                  type="text" 
                  placeholder="Let's work together"
                  className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-green-400"
                />
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-2">Message</label>
                <Textarea 
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-green-400 resize-none"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-3 text-lg font-semibold rounded-lg transition-all duration-300"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
