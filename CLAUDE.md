# Claude Implementation Plan

## 1. Project Description & Goals
**nghean-heritage-ethnography** is a comprehensive digital heritage platform dedicated to preserving and celebrating the cultural identity of the 54 ethnic groups in Nghe An province, Vietnam. The project serves as a high-fidelity virtual ethnography museum, offering immersive multimedia experiences, interactive educational tools, and deep cultural storytelling.

### **1.1 Core Architecture**
- **Frontend:** Next.js 16 (App Router) with React 19
- **Styling:** Tailwind CSS v4
- **Data:** Local JSON files (mocked), structured by ethnic group taxonomy
- **Deployment Target:** Vercel

### **1.2 Target User Experience**
The platform aims to provide a "Digital Heritage" experience that is both beautiful and functional:
- **Visuals:** High-fidelity 4K imagery, immersive parallax scrolling, 3D-like effects
- **Interactions:** "Hotspot" exploration, interactive clothing collages, timeline-based navigation
- **Navigation:** Unified sidebar with "54 Dân tộc" (54 Ethnic Groups) as the root, ethnic groups as sub-categories
- **Tone:** Reverent, educational, poetic, culturally sensitive

---

## 2. Data Management Strategy

### **2.1 Data Source**
- All cultural data resides in `/src/data/` directory
- **`ethnics.json`**: Primary index of all 54 groups with key metadata
- **`[ethnicId].json`**: Detailed data for each ethnic group (biographies, customs, artifacts)

### **2.2 Data Schema Examples**

```json
// ethnics.json structure
[
  {
    "id": "o-du",
    "name": "Người O Du",
    "category": "Dân tộc thiểu số",
    "description": "Tộc người Thái sinh sống ở Nghệ An, nổi tiếng với các lễ hội độc đáo.",
    "imageUrl": "/images/nghean_nature.png",
    "population": 12000,
    "location": ["Tân Kỳ", "Thanh Chương"]
  }
]

// o-du.json structure
{
  "id": "o-du",
  "name": "Người O Du",
  "category": "Dân tộc thiểu số",
  "bannerImageUrl": "/images/o-du-banner.jpg",
  "population": 12000,
  "history": "19th-century migrations from Laos",
  "introduction": "Nestled in the mountainous regions of Nghe An province, the O Du people maintain a rich cultural heritage deeply connected to their environment...",
  "keyFacts": {
    "location": "Nghe An, Nghệ Tĩnh region",
    "officialName": "Tộc người Thái",
    "totalPopulation": 12000,
    "dialect": "Thai language"
  },
  "traditions": [
    {
      "name": "Lễ hội Gầu Tào",
      "description": "A spring festival dedicated to the Sky God, celebrating harvests and community...",
      "imageUrl": "/images/gau-tao-festival.jpg",
      "practices": ["Tree climbing", "Sacred rituals", "Communal feasting"]
    }
  ],
  "artifacts": [
    {
      "name": "Váy Thái",
      "description": "Traditional skirt with distinctive vertical patterns...",
      "imageUrl": "/images/thai-skirt.jpg"
    }
  ],
  "cuisine": [
    {
      "name": "Cơm nếp nương",
      "description": "Sticky rice cooked in bamboo tubes...",
      "imageUrl": "/images/sticky-rice.jpg"
    }
  ],
  "spiritualBeliefs": {
    "primaryReligion": "Ancestral Worship",
    "ceremonies": ["Gầu Tào", "Spirit offerings"]
  },
  "tourism": {
    "bestTimeToVisit": "Spring (March-April)",
    "recommendedSites": ["Nậm Ngân stream", "Gầu Tào hill"]
  },
  "glossary": [
    {
      "term": "Nậm Ngân",
      "definition": "Sacred stream used in purification rituals"
    }
  ]
}
```

---

## 3. Component Implementation Plan

### **3.1 Page Structure**

#### **Home Page (`src/app/page.tsx`)**
**Theme:** Majestic, expansive, 4K virtual landscape
**Layout:**
- **Hero Section:**
  - Full-screen 4K background video/image with parallax effect
  - 3D-rendered title text: "54 Dân tộc Việt Nam"
  - Subtitle: "Bảo tồn và Tôn vinh Di sản Văn hóa Nghệ An"
  - Scroll-triggered animations (mountains rising, text fading in)
- **Featured Ethnicities:**
  - Masonry grid with parallax hover effects
  - 4K ethnic portrait images with cinematic lighting
  - Interactive hotspot exploration (4-8 hotspots per ethnicity)
- **Intro Section:**
  - Text: "Bước chân vào thế giới 54 dân tộc thiểu số"
  - Image: Panoramic Nghe An landscape
  - Button: "Khám phá Ngay"
- **Footer:**
  - Credits: "Bảo tồn bởi Nghe An Digital Heritage Team"
  - Technical info: "NGHE AN ETHNIC ETHNOGRAPHY | PHIÊN BẢN SỐ 2.0"

#### **Ethnic Group Page (`src/app/dan-toc/[slug]/page.tsx`)**
**Theme:** Immersive vertical scroll journey
**Layout:**
- **Banner Section:**
  - Full-width 4K banner image (parallax scrolling)
  - Ethnic group name in large serif typography
  - Population data and key facts
  - Social sharing buttons (Facebook, Twitter, Email)
- **Introduction:**
  - Text: "Khám phá ngôn ngữ, trang phục và đời sống của người [Tên dân tộc]"
  - 4K archival images
  - "54 Dân tộc" sidebar anchored on left
- **Interactive Sections:**
  - Hotspot gallery with 4K backdrop
  - Clothing comparison with 3D-style layers
  - Sacred sites with parallax 360° view
  - Rituals timeline with animation
  - Artifact showcase with hover-triggered zoom
- **Conclusion:**
  - Thank you message
  - Grid of related ethnic groups

#### **Not Found Page (`src/app/not-found.tsx`)**
**Theme:** Minimalist, poetic
**Layout:**
- Text: "Không tìm thấy trang (404)"
- Message: "Hành trình khám phá văn hóa không có điểm dừng, hãy tìm về với bản làng."
- Button: "Quay về Trang chủ" → `/`

---

### **3.2 Custom Components**

#### **1. Hero Banner (`src/components/custom/hero-banner.tsx`)**
**Purpose:** Full-screen immersive landing experience
**Implementation:**
```typescript
export function HeroBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      setMousePosition({
        x: e.clientX - rect.left - rect.width / 2,
        y: e.clientY - rect.top - rect.height / 2,
      });
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full overflow-hidden bg-black"
    >
      {/* Video Background with Parallax */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      >
        <source src="/videos/nghe-an-4k-aerial.mp4" type="video/mp4" />
      </video>
      
      {/* 3D Title Animation */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
