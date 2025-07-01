'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface PlanState {
  defianceXDR: boolean;
  devices: number;
  managedXDR: boolean;
  programManagement: number | null;
  securityAdvisory: boolean;
  virtualCiso: 'support' | 'fractional' | null;
  gapAssessment: boolean;
  penetrationTesting: boolean;
  networkPenTest: boolean;
  appPenTest: boolean;
  wirelessPenTest: boolean;
  socialEngineering: boolean;
  emailPhishing: boolean;
  vishingCampaigns: boolean;
  securityAwareness: boolean;
}

// Pricing structure based on temp.html
const prices = {
  defianceXDR: 3, // per device
  managedXDR: 35, // per device
  programManagement: {
    4: 500,
    8: 1000,
    16: 2000,
    32: 4000
  },
  virtualCiso: {
    support: 1000,
    fractional: 5000
  },
  gapAssessment: 10000, // one-time
  networkPenTest: 8000, // one-time
  appPenTest: 10000, // one-time
  wirelessPenTest: 4000, // one-time
  emailPhishing: 4000, // one-time
  vishingCampaigns: 4000, // one-time
  securityAwareness: 6000 // one-time
};

// Tooltip information
const tooltips: { [key: string]: string } = {
  managed: "Managed services include continuous monitoring and maintenance of your systems by our expert team.",
  programManagement: "Program management involves managing multiple related projects to achieve strategic goals.",
  virtualCiso: "Virtual CISO provides executive-level security leadership to organizations without a full-time CISO.",
  gapAssessment: "Gap Assessment / Analysis evaluates your current security posture and identifies areas of improvement.",
  networkPenTest: "Network Penetration Testing identifies vulnerabilities in your internal and external networks.",
  appPenTest: "Application Penetration Testing finds and fixes security weaknesses in your applications.",
  wirelessPenTest: "Wireless Penetration Testing ensures your wireless networks are secure from potential threats.",
  emailPhishing: "Email phishing campaigns test your organization's resilience against phishing attacks.",
  vishingCampaigns: "Vishing campaigns simulate voice-based phishing attacks to assess your security posture.",
  securityAwareness: "Security Awareness Training educates your employees on how to avoid common security threats."
};

const ToggleSwitch = ({ checked, onChange, disabled = false }: { checked: boolean; onChange: (checked: boolean) => void; disabled?: boolean }) => (
  <div className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${checked ? 'bg-cyan-600' : 'bg-gray-300'}`} onClick={() => !disabled && onChange(!checked)}>
    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${checked ? 'translate-x-6' : 'translate-x-1'}`} />
  </div>
);

const CustomCheckbox = ({ checked, onChange, disabled = false }: { checked: boolean; onChange: (checked: boolean) => void; disabled?: boolean }) => (
  <div className={`relative w-5 h-5 border-2 rounded transition-colors ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} ${checked ? 'bg-cyan-600 border-cyan-600' : 'border-gray-300 hover:border-cyan-400'}`} onClick={() => !disabled && onChange(!checked)}>
    {checked && (
      <svg className="w-3 h-3 text-white absolute top-0.5 left-0.5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    )}
  </div>
);

const Tooltip = ({ text, children }: { text: string; children: React.ReactNode }) => (
  <div className="relative group inline-block">
    {children}
    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 max-w-xs">
      {text}
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
    </div>
  </div>
);

export default function SecurityPlanCalculator() {
  const [plan, setPlan] = useState<PlanState>({
    defianceXDR: true,
    devices: 1,
    managedXDR: true,
    programManagement: null,
    securityAdvisory: false,
    virtualCiso: null,
    gapAssessment: false,
    penetrationTesting: false,
    networkPenTest: false,
    appPenTest: false,
    wirelessPenTest: false,
    socialEngineering: false,
    emailPhishing: false,
    vishingCampaigns: false,
    securityAwareness: false
  });

  const [showContactForm, setShowContactForm] = useState(false);
  const [contactInfo, setContactInfo] = useState({
    name: '',
    company: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{type: 'success' | 'error', message: string} | null>(null);

  // Calculate costs
  const calculateCosts = () => {
    let monthlyCost = 0;
    let oneTimeCost = 0;

    // Defiance XDR costs
    if (plan.defianceXDR) {
      monthlyCost += prices.defianceXDR * plan.devices;
      
      if (plan.managedXDR) {
        monthlyCost += prices.managedXDR * plan.devices;
      }
      
      if (plan.programManagement) {
        monthlyCost += prices.programManagement[plan.programManagement as keyof typeof prices.programManagement];
      }
    }

    // Security Advisory costs
    if (plan.securityAdvisory) {
      if (plan.virtualCiso) {
        monthlyCost += prices.virtualCiso[plan.virtualCiso];
      }
      
      if (plan.gapAssessment) {
        oneTimeCost += prices.gapAssessment;
      }
    }

    // Penetration Testing costs
    if (plan.penetrationTesting) {
      if (plan.networkPenTest) oneTimeCost += prices.networkPenTest;
      if (plan.appPenTest) oneTimeCost += prices.appPenTest;
      if (plan.wirelessPenTest) oneTimeCost += prices.wirelessPenTest;
    }

    // Social Engineering costs
    if (plan.socialEngineering) {
      if (plan.emailPhishing) oneTimeCost += prices.emailPhishing;
      if (plan.vishingCampaigns) oneTimeCost += prices.vishingCampaigns;
      if (plan.securityAwareness) oneTimeCost += prices.securityAwareness;
    }

    return { monthlyCost, oneTimeCost };
  };

  const { monthlyCost, oneTimeCost } = calculateCosts();

  // Build quote items from current plan
  const buildQuoteItems = () => {
    const items: Array<{service: string, description: string, type: 'monthly' | 'one-time', price: number, quantity?: number}> = [];

    // Defiance XDR items
    if (plan.defianceXDR) {
      items.push({
        service: 'Defiance XDR™',
        description: 'Advanced threat detection and response platform',
        type: 'monthly',
        price: prices.defianceXDR * plan.devices,
        quantity: plan.devices
      });

      if (plan.managedXDR) {
        items.push({
          service: 'Managed XDR',
          description: 'Professional monitoring and management of XDR platform',
          type: 'monthly',
          price: prices.managedXDR * plan.devices,
          quantity: plan.devices
        });
      }

      if (plan.programManagement) {
        const pmPrice = prices.programManagement[plan.programManagement as keyof typeof prices.programManagement];
        items.push({
          service: `Program Management (${plan.programManagement}hrs)`,
          description: 'Strategic security program oversight and coordination',
          type: 'monthly',
          price: pmPrice
        });
      }
    }

    // Security Advisory items
    if (plan.securityAdvisory) {
      if (plan.virtualCiso) {
        const vcisoPrice = prices.virtualCiso[plan.virtualCiso];
        const vcisoType = plan.virtualCiso === 'support' ? 'vCISO Support' : 'Fractional vCISO';
        items.push({
          service: `Virtual CISO - ${vcisoType}`,
          description: 'Executive-level security leadership and strategic guidance',
          type: 'monthly',
          price: vcisoPrice
        });
      }

      if (plan.gapAssessment) {
        items.push({
          service: 'Gap Assessment & Analysis',
          description: 'Comprehensive security posture evaluation and improvement roadmap',
          type: 'one-time',
          price: prices.gapAssessment
        });
      }
    }

    // Penetration Testing items
    if (plan.penetrationTesting) {
      if (plan.networkPenTest) {
        items.push({
          service: 'Network Penetration Test',
          description: 'Comprehensive internal and external network vulnerability assessment',
          type: 'one-time',
          price: prices.networkPenTest
        });
      }

      if (plan.appPenTest) {
        items.push({
          service: 'Application Penetration Test',
          description: 'In-depth web application security testing and vulnerability analysis',
          type: 'one-time',
          price: prices.appPenTest
        });
      }

      if (plan.wirelessPenTest) {
        items.push({
          service: 'Wireless Penetration Test',
          description: 'Wireless network security assessment and threat evaluation',
          type: 'one-time',
          price: prices.wirelessPenTest
        });
      }
    }

    // Social Engineering items
    if (plan.socialEngineering) {
      if (plan.emailPhishing) {
        items.push({
          service: 'Email Phishing Campaigns',
          description: 'Simulated phishing attacks to test employee security awareness',
          type: 'one-time',
          price: prices.emailPhishing
        });
      }

      if (plan.vishingCampaigns) {
        items.push({
          service: 'Vishing Campaigns',
          description: 'Voice-based social engineering simulation and training',
          type: 'one-time',
          price: prices.vishingCampaigns
        });
      }

      if (plan.securityAwareness) {
        items.push({
          service: 'Security Awareness Training',
          description: 'Comprehensive employee education on cybersecurity best practices',
          type: 'one-time',
          price: prices.securityAwareness
        });
      }
    }

    return items;
  };

  // Handle quote email submission
  const handleEmailQuote = async () => {
    // Validate contact information
    if (!contactInfo.name || !contactInfo.company || !contactInfo.email) {
      setSubmitMessage({
        type: 'error',
        message: 'Please fill in all contact information fields before sending the quote.'
      });
      setTimeout(() => setSubmitMessage(null), 5000);
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactInfo.email)) {
      setSubmitMessage({
        type: 'error',
        message: 'Please enter a valid email address.'
      });
      setTimeout(() => setSubmitMessage(null), 5000);
      return;
    }

    // Check if there are any services selected
    const items = buildQuoteItems();
    if (items.length === 0) {
      setSubmitMessage({
        type: 'error',
        message: 'Please select at least one service before sending a quote.'
      });
      setTimeout(() => setSubmitMessage(null), 5000);
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: contactInfo.name,
          email: contactInfo.email,
          company: contactInfo.company,
          items,
          monthlyCost,
          oneTimeCost
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send quote');
      }

      setSubmitMessage({
        type: 'success',
        message: 'Quote sent successfully! Check your email for the detailed proposal.'
      });

      // Reset contact form after successful submission
      setContactInfo({ name: '', company: '', email: '' });
      setShowContactForm(false);

    } catch (error) {
      console.error('Error sending quote:', error);
      setSubmitMessage({
        type: 'error',
        message: error instanceof Error ? error.message : 'Failed to send quote. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(null), 8000);
    }
  };

  // Handle program management dependency
  useEffect(() => {
    if (!plan.managedXDR) {
      setPlan(prev => ({ ...prev, programManagement: null }));
    }
  }, [plan.managedXDR]);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Configuration Panel */}
        <div className="lg:col-span-2">
          <div className="bg-white shadow-lg rounded-lg p-6 space-y-8">
            
            {/* Defiance XDR Section */}
            <div className="border-l-4 border-cyan-500 pl-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-[#241940]">Defiance XDR™</h3>
                <ToggleSwitch 
                  checked={plan.defianceXDR} 
                  onChange={(checked) => setPlan(prev => ({ 
                    ...prev, 
                    defianceXDR: checked,
                    managedXDR: checked ? prev.managedXDR : false,
                    programManagement: checked ? prev.programManagement : null
                  }))} 
                />
              </div>
              
              {plan.defianceXDR && (
                <div className="space-y-4 ml-4">
                  {/* Device Count */}
                  <div className="flex items-center justify-between">
                    <label className="text-lg font-medium text-gray-700">Number of devices:</label>
                    <input 
                      type="number" 
                      min="1" 
                      value={plan.devices}
                      onChange={(e) => setPlan(prev => ({ ...prev, devices: parseInt(e.target.value) || 1 }))}
                      className="w-20 px-3 py-2 border border-gray-300 rounded-md focus:ring-cyan-500 focus:border-cyan-500 text-gray-900"
                    />
                  </div>
                  
                  {/* Managed XDR */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-lg font-medium text-gray-700">Managed XDR</span>
                      <Tooltip text={tooltips.managed}>
                        <span className="ml-2 w-4 h-4 bg-gray-400 text-white rounded-full flex items-center justify-center text-xs cursor-help">?</span>
                      </Tooltip>
                    </div>
                    <ToggleSwitch 
                      checked={plan.managedXDR} 
                      onChange={(checked) => setPlan(prev => ({ ...prev, managedXDR: checked }))} 
                    />
                  </div>
                  
                  {/* Program Management */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-lg font-medium text-gray-700">Program Management</span>
                      <Tooltip text={tooltips.programManagement}>
                        <span className="ml-2 w-4 h-4 bg-gray-400 text-white rounded-full flex items-center justify-center text-xs cursor-help">?</span>
                      </Tooltip>
                    </div>
                    <CustomCheckbox 
                      checked={plan.programManagement !== null} 
                      onChange={(checked) => setPlan(prev => ({ 
                        ...prev, 
                        programManagement: checked ? 4 : null 
                      }))}
                      disabled={!plan.managedXDR}
                    />
                  </div>
                  
                  {/* Program Management Options */}
                  {plan.programManagement !== null && plan.managedXDR && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
                      {Object.entries(prices.programManagement).map(([hours, price]) => (
                        <label key={hours} className={`cursor-pointer p-3 border-2 rounded-lg text-center transition-colors ${plan.programManagement === parseInt(hours) ? 'border-cyan-500 bg-cyan-50' : 'border-gray-200 hover:border-cyan-300'}`}>
                          <input 
                            type="radio" 
                            name="programManagement" 
                            value={hours}
                            checked={plan.programManagement === parseInt(hours)}
                            onChange={() => setPlan(prev => ({ ...prev, programManagement: parseInt(hours) }))}
                            className="sr-only"
                          />
                          <div className="text-sm font-medium text-gray-700">{hours}hrs</div>
                          <div className="text-cyan-600 font-bold">${price}/mo</div>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Security Advisory Section */}
            <div className="border-l-4 border-purple-500 pl-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-[#241940]">Security Advisory</h3>
                <ToggleSwitch 
                  checked={plan.securityAdvisory} 
                  onChange={(checked) => setPlan(prev => ({ 
                    ...prev, 
                    securityAdvisory: checked,
                    virtualCiso: checked ? prev.virtualCiso : null,
                    gapAssessment: checked ? prev.gapAssessment : false
                  }))} 
                />
              </div>
              
              {plan.securityAdvisory && (
                <div className="space-y-4 ml-4">
                  {/* Virtual CISO */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-lg font-medium text-gray-700">Virtual CISO</span>
                      <Tooltip text={tooltips.virtualCiso}>
                        <span className="ml-2 w-4 h-4 bg-gray-400 text-white rounded-full flex items-center justify-center text-xs cursor-help">?</span>
                      </Tooltip>
                    </div>
                    <CustomCheckbox 
                      checked={plan.virtualCiso !== null} 
                      onChange={(checked) => setPlan(prev => ({ 
                        ...prev, 
                        virtualCiso: checked ? 'support' : null 
                      }))} 
                    />
                  </div>
                  
                  {/* Virtual CISO Options */}
                  {plan.virtualCiso !== null && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                      {Object.entries(prices.virtualCiso).map(([type, price]) => (
                        <label key={type} className={`cursor-pointer p-3 border-2 rounded-lg text-center transition-colors ${plan.virtualCiso === type ? 'border-purple-500 bg-purple-50' : 'border-gray-200 hover:border-purple-300'}`}>
                          <input 
                            type="radio" 
                            name="virtualCiso" 
                            value={type}
                            checked={plan.virtualCiso === type}
                            onChange={() => setPlan(prev => ({ ...prev, virtualCiso: type as 'support' | 'fractional' }))}
                            className="sr-only"
                          />
                          <div className="text-sm font-medium text-gray-700">{type === 'support' ? 'vCISO Support' : 'Fractional vCISO'}</div>
                          <div className="text-purple-600 font-bold">${price}/mo</div>
                        </label>
                      ))}
                    </div>
                  )}
                  
                  {/* Gap Assessment */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-lg font-medium text-gray-700">Gap Assessment / Analysis</span>
                      <Tooltip text={tooltips.gapAssessment}>
                        <span className="ml-2 w-4 h-4 bg-gray-400 text-white rounded-full flex items-center justify-center text-xs cursor-help">?</span>
                      </Tooltip>
                    </div>
                    <CustomCheckbox 
                      checked={plan.gapAssessment} 
                      onChange={(checked) => setPlan(prev => ({ ...prev, gapAssessment: checked }))} 
                    />
                  </div>
                  {plan.gapAssessment && (
                    <div className="ml-6 text-sm text-purple-600 font-medium">One-time: $10,000</div>
                  )}
                </div>
              )}
            </div>

            {/* Penetration Testing Section */}
            <div className="border-l-4 border-red-500 pl-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-[#241940]">Penetration Testing</h3>
                <ToggleSwitch 
                  checked={plan.penetrationTesting} 
                  onChange={(checked) => setPlan(prev => ({ 
                    ...prev, 
                    penetrationTesting: checked,
                    networkPenTest: checked ? prev.networkPenTest : false,
                    appPenTest: checked ? prev.appPenTest : false,
                    wirelessPenTest: checked ? prev.wirelessPenTest : false
                  }))} 
                />
              </div>
              
              {plan.penetrationTesting && (
                <div className="space-y-4 ml-4">
                  {/* Network Pen Test */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-lg font-medium text-gray-700">Network Penetration Test</span>
                      <Tooltip text={tooltips.networkPenTest}>
                        <span className="ml-2 w-4 h-4 bg-gray-400 text-white rounded-full flex items-center justify-center text-xs cursor-help">?</span>
                      </Tooltip>
                    </div>
                    <CustomCheckbox 
                      checked={plan.networkPenTest} 
                      onChange={(checked) => setPlan(prev => ({ ...prev, networkPenTest: checked }))} 
                    />
                  </div>
                  {plan.networkPenTest && (
                    <div className="ml-6 text-sm text-red-600 font-medium">One-time: $8,000</div>
                  )}
                  
                  {/* App Pen Test */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-lg font-medium text-gray-700">Application Penetration Test</span>
                      <Tooltip text={tooltips.appPenTest}>
                        <span className="ml-2 w-4 h-4 bg-gray-400 text-white rounded-full flex items-center justify-center text-xs cursor-help">?</span>
                      </Tooltip>
                    </div>
                    <CustomCheckbox 
                      checked={plan.appPenTest} 
                      onChange={(checked) => setPlan(prev => ({ ...prev, appPenTest: checked }))} 
                    />
                  </div>
                  {plan.appPenTest && (
                    <div className="ml-6 text-sm text-red-600 font-medium">One-time: $10,000</div>
                  )}
                  
                  {/* Wireless Pen Test */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-lg font-medium text-gray-700">Wireless Penetration Test</span>
                      <Tooltip text={tooltips.wirelessPenTest}>
                        <span className="ml-2 w-4 h-4 bg-gray-400 text-white rounded-full flex items-center justify-center text-xs cursor-help">?</span>
                      </Tooltip>
                    </div>
                    <CustomCheckbox 
                      checked={plan.wirelessPenTest} 
                      onChange={(checked) => setPlan(prev => ({ ...prev, wirelessPenTest: checked }))} 
                    />
                  </div>
                  {plan.wirelessPenTest && (
                    <div className="ml-6 text-sm text-red-600 font-medium">One-time: $4,000</div>
                  )}
                </div>
              )}
            </div>

            {/* Social Engineering Section */}
            <div className="border-l-4 border-green-500 pl-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-[#241940]">Social Engineering</h3>
                <ToggleSwitch 
                  checked={plan.socialEngineering} 
                  onChange={(checked) => setPlan(prev => ({ 
                    ...prev, 
                    socialEngineering: checked,
                    emailPhishing: checked ? prev.emailPhishing : false,
                    vishingCampaigns: checked ? prev.vishingCampaigns : false,
                    securityAwareness: checked ? prev.securityAwareness : false
                  }))} 
                />
              </div>
              
              {plan.socialEngineering && (
                <div className="space-y-4 ml-4">
                  {/* Email Phishing */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-lg font-medium text-gray-700">Email phishing campaigns</span>
                      <Tooltip text={tooltips.emailPhishing}>
                        <span className="ml-2 w-4 h-4 bg-gray-400 text-white rounded-full flex items-center justify-center text-xs cursor-help">?</span>
                      </Tooltip>
                    </div>
                    <CustomCheckbox 
                      checked={plan.emailPhishing} 
                      onChange={(checked) => setPlan(prev => ({ ...prev, emailPhishing: checked }))} 
                    />
                  </div>
                  {plan.emailPhishing && (
                    <div className="ml-6 text-sm text-green-600 font-medium">One-time: $4,000</div>
                  )}
                  
                  {/* Vishing Campaigns */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-lg font-medium text-gray-700">Vishing campaigns</span>
                      <Tooltip text={tooltips.vishingCampaigns}>
                        <span className="ml-2 w-4 h-4 bg-gray-400 text-white rounded-full flex items-center justify-center text-xs cursor-help">?</span>
                      </Tooltip>
                    </div>
                    <CustomCheckbox 
                      checked={plan.vishingCampaigns} 
                      onChange={(checked) => setPlan(prev => ({ ...prev, vishingCampaigns: checked }))} 
                    />
                  </div>
                  {plan.vishingCampaigns && (
                    <div className="ml-6 text-sm text-green-600 font-medium">One-time: $4,000</div>
                  )}
                  
                  {/* Security Awareness */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-lg font-medium text-gray-700">Security Awareness Training</span>
                      <Tooltip text={tooltips.securityAwareness}>
                        <span className="ml-2 w-4 h-4 bg-gray-400 text-white rounded-full flex items-center justify-center text-xs cursor-help">?</span>
                      </Tooltip>
                    </div>
                    <CustomCheckbox 
                      checked={plan.securityAwareness} 
                      onChange={(checked) => setPlan(prev => ({ ...prev, securityAwareness: checked }))} 
                    />
                  </div>
                  {plan.securityAwareness && (
                    <div className="ml-6 text-sm text-green-600 font-medium">One-time: $6,000</div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Results Panel */}
        <div className="lg:col-span-1">
          <div className="bg-white shadow-lg rounded-lg p-6 sticky top-6">
            <h2 className="text-2xl font-bold text-[#241940] mb-6 text-center">Your Plan</h2>
            
            {/* Pricing Display */}
            <div className="text-center mb-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                ${monthlyCost.toLocaleString()}/mo + ${oneTimeCost.toLocaleString()}
              </div>
              <div className="text-gray-500 text-sm">Starting at</div>
            </div>

            {/* Service Summary */}
            <div className="space-y-3 mb-6">
              {plan.defianceXDR && (
                <div className="flex items-center gap-2 p-2 bg-cyan-50 rounded border border-cyan-200">
                  <div className="w-3 h-3 bg-cyan-500 rounded"></div>
                  <span className="text-sm font-medium text-gray-700">Defiance XDR™</span>
                </div>
              )}
              {plan.securityAdvisory && (
                <div className="flex items-center gap-2 p-2 bg-purple-50 rounded border border-purple-200">
                  <div className="w-3 h-3 bg-purple-500 rounded"></div>
                  <span className="text-sm font-medium text-gray-700">Security Advisory</span>
                </div>
              )}
              {plan.penetrationTesting && (
                <div className="flex items-center gap-2 p-2 bg-red-50 rounded border border-red-200">
                  <div className="w-3 h-3 bg-red-500 rounded"></div>
                  <span className="text-sm font-medium text-gray-700">Penetration Testing</span>
                </div>
              )}
              {plan.socialEngineering && (
                <div className="flex items-center gap-2 p-2 bg-green-50 rounded border border-green-200">
                  <div className="w-3 h-3 bg-green-500 rounded"></div>
                  <span className="text-sm font-medium text-gray-700">Social Engineering</span>
                </div>
              )}
            </div>

            {/* Includes */}
            <div className="mb-6">
              <h4 className="font-bold text-lg mb-3 text-gray-800">Includes:</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  2-year price lock
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  No upfront costs
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  No contracts
                </li>
              </ul>
            </div>

            {/* Email Quote Toggle */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-700">Email me this Quote</span>
              <CustomCheckbox 
                checked={showContactForm} 
                onChange={(checked) => {
                  setShowContactForm(checked);
                  if (!checked) {
                    setSubmitMessage(null);
                  }
                }} 
              />
            </div>

            {/* Contact Form */}
            {showContactForm && (
              <div className="space-y-4 mb-6">
                <input 
                  type="text" 
                  placeholder="Enter your name"
                  value={contactInfo.name}
                  onChange={(e) => setContactInfo(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-cyan-500 focus:border-cyan-500 text-gray-900 placeholder-gray-500"
                />
                <input 
                  type="text" 
                  placeholder="Enter your company name"
                  value={contactInfo.company}
                  onChange={(e) => setContactInfo(prev => ({ ...prev, company: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-cyan-500 focus:border-cyan-500 text-gray-900 placeholder-gray-500"
                />
                <input 
                  type="email" 
                  placeholder="Enter your contact email"
                  value={contactInfo.email}
                  onChange={(e) => setContactInfo(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-cyan-500 focus:border-cyan-500 text-gray-900 placeholder-gray-500"
                />
              </div>
            )}

            {/* Success/Error Message */}
            {submitMessage && (
              <div className={`p-4 rounded-lg mb-4 ${submitMessage.type === 'success' ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                <div className={`flex items-center gap-2 ${submitMessage.type === 'success' ? 'text-green-800' : 'text-red-800'}`}>
                  {submitMessage.type === 'success' ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  )}
                  <span className="text-sm font-medium">{submitMessage.message}</span>
                </div>
              </div>
            )}

            <div className="flex gap-4 mb-4">
              {/* Contact Button */}
              <Link href="/contact-us" className="flex-1">
                <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-3 px-6 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Contact Us
                </button>
              </Link>

              <button 
                onClick={showContactForm ? handleEmailQuote : () => {
                  setShowContactForm(true);
                  setSubmitMessage(null);
                }}
                disabled={isSubmitting}
                className={`flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {showContactForm ? 'Send Quote' : 'Email Quote'}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 