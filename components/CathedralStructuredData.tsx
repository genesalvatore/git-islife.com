import Script from 'next/script'

interface StructuredDataProps {
    siteName: string
    siteUrl: string
    description: string
    logo?: string
    foundingDate?: string
    theme?: string // e.g., 'community', 'theology', 'life', etc.
}

export default function CathedralStructuredData({
    siteName,
    siteUrl,
    description,
    logo = '/logo.png',
    foundingDate = '2026',
    theme = 'sovereignty'
}: StructuredDataProps) {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": siteName,
        "url": siteUrl,
        "logo": `${siteUrl}${logo}`,
        "foundingDate": foundingDate,
        "founders": [{
            "@type": "Person",
            "name": "Gene Salvatore"
        }],
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Southbury",
            "addressRegion": "CT",
            "postalCode": "06488",
            "addressCountry": "US"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "email": `support@${new URL(siteUrl).hostname}`,
            "contactType": "customer support",
            "availableLanguage": "en"
        },
        "sameAs": [
            "https://github.com/genesalvatore",
            "https://git-theology.com",
            "https://git-cathedral.com",
            "https://git-iscommunity.com"
        ],
        "description": description,
        "memberOf": {
            "@type": "Organization",
            "name": "Cathedral Network",
            "url": "https://git-cathedral.com"
        }
    }

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": siteName,
        "url": siteUrl,
        "description": description,
        "inLanguage": "en-US",
        "isPartOf": {
            "@type": "Organization",
            "name": "Cathedral Network"
        }
    }

    const creativeWorkSchema = {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "name": siteName,
        "description": description,
        "author": {
            "@type": "Person",
            "name": "Gene Salvatore"
        },
        "publisher": {
            "@type": "Organization",
            "name": siteName
        },
        "datePublished": foundingDate,
        "inLanguage": "en-US"
    }

    return (
        <>
            <Script
                id="schema-organization"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <Script
                id="schema-website"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <Script
                id="schema-creative-work"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkSchema) }}
            />
        </>
    )
}
