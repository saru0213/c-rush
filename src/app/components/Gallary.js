import React, { useState, useEffect } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Camera,
} from "lucide-react";
import Image from "next/image";

// Gallery Component
export const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryData = [
    {
      id: 1,
      src: "/winner1.jpg",
      category: "competition",
      title: "Intense Coding Session C-Rush1.0",
      description: "Students deep in concentration during C-Rush 2025",
      year: "2025",
    },
    {
      id: 2,
      src: "/winner1.jpg",
      category: "winners",
      title: "Champions Celebration",
      description: "Winners of C-Rush 2025 receiving their trophies",
      year: "2025",
    },
    {
      id: 3,
      src: "/img (1).jpg",
      category: "campus",
      title: "GCOEY Computer Lab",
      description: "State-of-the-art programming laboratory",
      year: "2025",
    },
    {
      id: 4,
      src: "/img (2).jpg",
      category: "competition",
      title: "Problem Solving Marathon",
      description: "Participants tackling complex algorithms",
      year: "2025",
    },
    {
      id: 5,
      src: "/img (3).jpg",
      category: "winners",
      title: "Award Ceremony 2025",
      description: "Faculty presenting awards to top performers",
      year: "2025",
    },
    {
      id: 6,
      src: "/img (4).jpg",
      category: "campus",
      title: "Tech Fest Setup",
      description: "Event preparation and technical setup",
      year: "2025",
    },
    {
      id: 7,
      src: "/img (5).jpg",
      category: "competition",
      title: "Debugging Session",
      description: "Students collaborating and debugging code",
      year: "2025",
    },
    {
      id: 8,
      src: "/img (6).jpg",
      category: "winners",
      title: "Group Photo",
      description: "All participants and organizers together",
      year: "2025",
    },
    {
      id: 9,
      src: "/img (7).jpg",
      category: "campus",
      title: "GCOEY Main Building",
      description: "Beautiful campus architecture",
      year: "2025",
    },
  ];

  const categories = [
    { id: "all", name: "All Photos", count: galleryData.length },
    {
      id: "competition",
      name: "Competition",
      count: galleryData.filter((img) => img.category === "competition").length,
    },
    {
      id: "winners",
      name: "Winners",
      count: galleryData.filter((img) => img.category === "winners").length,
    },
    {
      id: "campus",
      name: "Campus",
      count: galleryData.filter((img) => img.category === "campus").length,
    },
  ];

  const filteredImages =
    activeCategory === "all"
      ? galleryData
      : galleryData.filter((img) => img.category === activeCategory);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex =
      currentImageIndex === 0
        ? filteredImages.length - 1
        : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
  };

  useEffect(() => {
    if (selectedImage) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedImage, currentImageIndex]);

  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-600/20 px-4 py-2 rounded-full mb-6">
            <Camera className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium">Event Gallery</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">Memories in Motion</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Relive the excitement, passion, and triumph from past C-Rush events
            through our photo gallery
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center space-x-2 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"
              }`}
            >
              <span>{category.name}</span>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  activeCategory === category.id
                    ? "bg-white/20"
                    : "bg-gray-600/50"
                }`}
              >
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative bg-gray-800/30 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300"
              onClick={() => openLightbox(image, index)}
            >
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="font-semibold mb-1">{image.title}</h4>
                  <p className="text-sm text-gray-200">{image.description}</p>
                </div>

                {/* Category Badge */}
                <div
                  className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-medium ${
                    image.category === "competition"
                      ? "bg-blue-500/80 text-white"
                      : image.category === "winners"
                      ? "bg-yellow-500/80 text-black"
                      : "bg-green-500/80 text-white"
                  }`}
                >
                  {image.year}
                </div>

                {/* Hover Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <ZoomIn className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">
                100+
              </div>
              <div className="text-sm text-gray-300">Photos Captured</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-400 mb-2">12+</div>
              <div className="text-sm text-gray-300">Participants</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
              <div className="text-sm text-gray-300">Memorable Moments</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">2</div>
              <div className="text-sm text-gray-300">Winners</div>
            </div>
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-2 right-0 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image */}
              <div className="bg-gray-900 rounded-lg overflow-hidden">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  width={800}
                  height={600}

                  className="max-w-full max-h-[70vh] object-contain"
                />

                {/* Image Info */}
                <div className="p-6 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{selectedImage.title}</h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        selectedImage.category === "competition"
                          ? "bg-blue-500/80"
                          : selectedImage.category === "winners"
                          ? "bg-yellow-500/80 text-black"
                          : "bg-green-500/80"
                      }`}
                    >
                      {selectedImage.category} • {selectedImage.year}
                    </span>
                  </div>
                  <p className="text-gray-300">{selectedImage.description}</p>
                  <div className="flex items-center justify-between mt-4 text-sm text-gray-400">
                    <span>
                      Image {currentImageIndex + 1} of {filteredImages.length}
                    </span>
                    <span>Use arrow keys to navigate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// ZoomIn icon component (since it's not in lucide-react by default)
const ZoomIn = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.35-4.35"></path>
    <line x1="11" y1="8" x2="11" y2="14"></line>
    <line x1="8" y1="11" x2="14" y2="11"></line>
  </svg>
);
