import { useState } from 'react';
import type { Project } from '../data/projects';
import { Badge } from './ui/Badge';
import { ExternalLink, Monitor, Smartphone, ChevronLeft, ChevronRight, X, ZoomIn, BookOpen, Shield, Server, Code, Cloud } from 'lucide-react';

interface ProjectCardProps {
    project: Project;
    featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {
    const [viewMode, setViewMode] = useState<'all' | 'desktop' | 'mobile'>('all');
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [showArchitecture, setShowArchitecture] = useState(false);

    const filteredScreenshots = viewMode === 'all'
        ? project.screenshots
        : project.screenshots.filter(s => s.label === viewMode);

    const displayScreenshots = filteredScreenshots.slice(0, featured ? 6 : 4);

    const openLightbox = (index: number) => setSelectedImage(index);
    const closeLightbox = () => setSelectedImage(null);

    const nextImage = () => {
        if (selectedImage !== null) {
            setSelectedImage((selectedImage + 1) % filteredScreenshots.length);
        }
    };

    const prevImage = () => {
        if (selectedImage !== null) {
            setSelectedImage(selectedImage === 0 ? filteredScreenshots.length - 1 : selectedImage - 1);
        }
    };

    // Parse description to highlight emoji sections
    const formatDescription = (text: string) => {
        // Remove "🎯 Problem Solved:" prefix and just show as description
        // Keep other emoji markers styled
        return text
            .replace(/🎯 Problem Solved: /g, '')
            .replace(/💡 Technical Challenges:/g, '<span class="text-yellow-400 font-semibold">💡 Technical Challenges:</span>')
            .replace(/🔐 Security:/g, '<span class="text-green-400 font-semibold">🔐 Security:</span>')
            .replace(/📈 Business Impact:/g, '<span class="text-blue-400 font-semibold">📈 Business Impact:</span>')
            .replace(/🦀 Rust Backend:/g, '<span class="text-orange-400 font-semibold">🦀 Rust Backend:</span>');
    };

    return (
        <article className={`bg-[#111111] rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300 overflow-hidden ${featured ? 'col-span-full lg:col-span-1' : ''}`}>
            {/* Header */}
            <div className="p-6 pb-4">
                <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{project.title}</h3>
                        <p className="text-purple-400 text-sm font-medium">{project.subtitle}</p>
                    </div>
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                            title="View Live"
                        >
                            <ExternalLink className="w-5 h-5" />
                        </a>
                    )}
                </div>

                {/* Detailed Description with Emoji Highlights */}
                <div
                    className="text-gray-400 text-sm leading-relaxed mb-4"
                    dangerouslySetInnerHTML={{ __html: formatDescription(project.description) }}
                />

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.technologies.slice(0, featured ? 8 : 5).map((tech) => (
                        <Badge key={tech} variant="default">
                            {tech}
                        </Badge>
                    ))}
                    {project.technologies.length > (featured ? 8 : 5) && (
                        <Badge variant="outline">+{project.technologies.length - (featured ? 8 : 5)}</Badge>
                    )}
                </div>

                {/* Security Features */}
                {project.securityFeatures && project.securityFeatures.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.securityFeatures.slice(0, 4).map((feature) => (
                            <Badge key={feature} variant="security">
                                🔐 {feature}
                            </Badge>
                        ))}
                    </div>
                )}

                {/* Admin Credentials Box */}
                {project.adminCredentials && (
                    <div className="mb-4 p-4 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-blue-900/30 border border-blue-500/30 rounded-xl">
                        <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                            <Shield className="w-4 h-4 text-blue-300" />
                            Demo Login Credentials
                        </h4>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="flex items-center gap-2">
                                <span className="text-blue-200">Email:</span>
                                <code className="px-2 py-1 bg-black/30 text-white rounded font-mono">{project.adminCredentials.email}</code>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-blue-200">Password:</span>
                                <code className="px-2 py-1 bg-black/30 text-white rounded font-mono">{project.adminCredentials.password}</code>
                            </div>
                        </div>
                        <p className="text-blue-200/60 text-xs mt-2">🔐 {project.adminCredentials.access}</p>
                    </div>
                )}

                {/* Technical Architecture Toggle */}
                {featured && project.architecture && (
                    <div className="mb-4">
                        <button
                            onClick={() => setShowArchitecture(!showArchitecture)}
                            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm font-medium"
                        >
                            <Server className="w-4 h-4" />
                            {showArchitecture ? '▼ Hide' : '▶ Show'} Technical Architecture
                        </button>

                        {showArchitecture && (
                            <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700 rounded-xl">
                                <div>
                                    <h5 className="flex items-center gap-2 text-cyan-400 font-semibold text-sm mb-2">
                                        <Code className="w-4 h-4" /> Frontend Stack
                                    </h5>
                                    <ul className="space-y-1">
                                        {project.architecture.frontend.map((item, i) => (
                                            <li key={i} className="text-gray-400 text-xs flex items-start gap-2">
                                                <span className="text-cyan-500">•</span> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="flex items-center gap-2 text-amber-400 font-semibold text-sm mb-2">
                                        <Server className="w-4 h-4" /> Backend & Database
                                    </h5>
                                    <ul className="space-y-1">
                                        {project.architecture.backend.map((item, i) => (
                                            <li key={i} className="text-gray-400 text-xs flex items-start gap-2">
                                                <span className="text-amber-500">•</span> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="flex items-center gap-2 text-emerald-400 font-semibold text-sm mb-2">
                                        <Cloud className="w-4 h-4" /> Infrastructure
                                    </h5>
                                    <ul className="space-y-1">
                                        {project.architecture.infrastructure.map((item, i) => (
                                            <li key={i} className="text-gray-400 text-xs flex items-start gap-2">
                                                <span className="text-emerald-500">•</span> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Screenshot Gallery */}
            <div className="px-6 pb-4">
                {/* View Toggle */}
                <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">Screenshots</span>
                    <div className="flex bg-gray-900 p-0.5 rounded-lg border border-gray-800">
                        <button
                            onClick={() => setViewMode('all')}
                            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${viewMode === 'all'
                                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                                : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            All
                        </button>
                        <button
                            onClick={() => setViewMode('desktop')}
                            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all flex items-center gap-1 ${viewMode === 'desktop'
                                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                                : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            <Monitor className="w-3 h-3" />
                            <span className="hidden sm:inline">Desktop</span>
                        </button>
                        <button
                            onClick={() => setViewMode('mobile')}
                            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all flex items-center gap-1 ${viewMode === 'mobile'
                                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                                : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            <Smartphone className="w-3 h-3" />
                            <span className="hidden sm:inline">Mobile</span>
                        </button>
                    </div>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {displayScreenshots.map((screenshot, index) => (
                        <div
                            key={index}
                            onClick={() => openLightbox(index)}
                            className={`relative rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500 cursor-pointer group transition-all duration-300 ${index === 0 && featured ? 'col-span-2 row-span-2' : ''
                                }`}
                            style={{
                                minHeight: index === 0 && featured ? '180px' : '80px',
                                aspectRatio: index === 0 && featured ? '16/10' : '16/9'
                            }}
                        >
                            <img
                                src={screenshot.src}
                                alt={screenshot.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                            />
                            {/* Device Badge */}
                            <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-0.5 rounded-full font-medium">
                                {screenshot.label === 'mobile' ? '📱' : '🖥️'}
                            </div>
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <ZoomIn className="w-6 h-6 text-white" />
                            </div>
                        </div>
                    ))}
                </div>

                {filteredScreenshots.length > displayScreenshots.length && (
                    <p className="text-center text-gray-500 text-xs mt-2">
                        +{filteredScreenshots.length - displayScreenshots.length} more in case study
                    </p>
                )}
            </div>

            {/* Footer with Action Buttons */}
            <div className="px-6 pb-6">
                <div className="flex flex-wrap gap-2">
                    {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                            <button className="w-full px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 text-sm">
                                <ExternalLink className="w-4 h-4" />
                                View Live Demo
                            </button>
                        </a>
                    )}
                    {project.adminUrl && (
                        <a href={project.adminUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                            <button className="w-full px-4 py-2.5 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 text-sm">
                                <Shield className="w-4 h-4" />
                                Admin Dashboard
                            </button>
                        </a>
                    )}
                    {project.caseStudyUrl && (
                        <a href={project.caseStudyUrl} className="flex-1">
                            <button className="w-full px-4 py-2.5 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2 text-sm">
                                <BookOpen className="w-4 h-4" />
                                Full Case Study
                            </button>
                        </a>
                    )}
                </div>

                {/* Tip Bar */}
                {featured && (project.liveUrl || project.caseStudyUrl) && (
                    <div className="mt-3 p-3 bg-gradient-to-r from-blue-900/20 to-green-900/20 rounded-lg border border-gray-700">
                        <p className="text-center text-xs text-white font-medium">
                            🚀 Use the buttons above to explore:{' '}
                            {project.liveUrl && <span className="text-blue-400">Live Demo</span>}
                            {project.liveUrl && project.adminUrl && ', '}
                            {project.adminUrl && <span className="text-green-400">Admin Dashboard</span>}
                            {(project.liveUrl || project.adminUrl) && project.caseStudyUrl && ', and '}
                            {project.caseStudyUrl && <span className="text-orange-400">Full Case Study</span>}
                        </p>
                    </div>
                )}
            </div>

            {/* Lightbox */}
            {selectedImage !== null && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                    onClick={closeLightbox}
                >
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <button
                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                    >
                        <ChevronLeft className="w-6 h-6 text-white" />
                    </button>

                    <button
                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                    >
                        <ChevronRight className="w-6 h-6 text-white" />
                    </button>

                    <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
                        <div className="absolute top-4 left-4 flex gap-2">
                            <span className="bg-gray-800 text-white text-sm px-3 py-1 rounded-full">
                                {selectedImage + 1} / {filteredScreenshots.length}
                            </span>
                            <span className="bg-gray-800 text-white text-sm px-3 py-1 rounded-full">
                                {filteredScreenshots[selectedImage].label === 'mobile' ? '📱 Mobile' : '🖥️ Desktop'}
                            </span>
                        </div>

                        <img
                            src={filteredScreenshots[selectedImage].src}
                            alt={filteredScreenshots[selectedImage].title}
                            className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                        />

                        <p className="text-center text-white mt-4 font-medium">
                            {filteredScreenshots[selectedImage].title}
                        </p>
                    </div>
                </div>
            )}
        </article>
    );
}
