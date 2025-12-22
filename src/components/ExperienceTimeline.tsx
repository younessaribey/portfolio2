import { useState } from 'react';
import type { Experience } from '../data/experience';
import { Badge } from './ui/Badge';
import { MapPin, Calendar, ChevronRight } from 'lucide-react';

interface ExperienceTimelineProps {
    experiences: Experience[];
}

export default function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const selected = experiences[selectedIndex];

    return (
        <div className="flex flex-col lg:flex-row gap-8">
            {/* Company Sidebar */}
            <div className="lg:w-1/3">
                <div className="relative">
                    {/* Vertical line - desktop only */}
                    <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px bg-gray-700"></div>

                    <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0">
                        {experiences.map((exp, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedIndex(index)}
                                className={`flex-shrink-0 lg:flex-shrink text-left p-4 rounded-xl transition-all duration-200 ${selectedIndex === index
                                        ? 'bg-gray-800 text-white lg:border-l-2 lg:border-purple-500 lg:-ml-px'
                                        : 'text-gray-400 hover:text-gray-300 hover:bg-gray-800/50'
                                    }`}
                            >
                                <span className="text-sm font-medium whitespace-nowrap">{exp.company}</span>
                                {exp.highlight && (
                                    <span className="block text-xs text-purple-400 mt-0.5">{exp.highlight}</span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Experience Details */}
            <div className="lg:w-2/3">
                <div className="bg-[#111111] rounded-2xl p-6 md:p-8 border border-gray-800">
                    <div className="space-y-6">
                        {/* Header */}
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                                {selected.title}
                                <span className="text-purple-400"> @ {selected.company}</span>
                            </h3>
                            <div className="flex flex-wrap gap-4 text-sm text-gray-400 mt-2">
                                <span className="flex items-center gap-1.5">
                                    <Calendar className="w-4 h-4" />
                                    {selected.period}
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <MapPin className="w-4 h-4" />
                                    {selected.location}
                                </span>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="space-y-3">
                            {selected.description.map((desc, descIndex) => (
                                <div key={descIndex} className="flex items-start gap-3">
                                    <ChevronRight className="w-4 h-4 text-purple-400 mt-1 flex-shrink-0" />
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        {desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 pt-2">
                            {selected.technologies.slice(0, 12).map((tech) => (
                                <Badge key={tech} variant="default">
                                    {tech}
                                </Badge>
                            ))}
                            {selected.technologies.length > 12 && (
                                <Badge variant="outline">+{selected.technologies.length - 12}</Badge>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
