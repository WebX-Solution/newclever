<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
    <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
    <xsl:template match="/">
        <html xmlns="http://www.w3.org/1999/xhtml">
            <head>
                <title>XML Sitemap - Clever-Autoankauf</title>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <style type="text/css">
                    body {
                        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
                        color: #333;
                        margin: 0;
                        padding: 2rem;
                    }
                    .wrapper {
                        max-width: 1200px;
                        margin: 0 auto;
                        padding: 20px;
                        background: white;
                        border-radius: 8px;
                        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                    }
                    h1 {
                        color: #e13025;
                        font-size: 24px;
                        margin-bottom: 20px;
                    }
                    table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-top: 20px;
                    }
                    th {
                        background: #f8f9fa;
                        padding: 12px;
                        text-align: left;
                        font-weight: 600;
                        color: #333;
                        border-bottom: 2px solid #e13025;
                    }
                    td {
                        padding: 12px;
                        border-bottom: 1px solid #eee;
                        color: #666;
                    }
                    tr:hover td {
                        background: #f8f9fa;
                    }
                    .url {
                        color: #e13025;
                        text-decoration: none;
                    }
                    .url:hover {
                        text-decoration: underline;
                    }
                    .priority {
                        text-align: center;
                    }
                    .changefreq {
                        text-align: center;
                    }
                    .lastmod {
                        text-align: center;
                    }
                </style>
            </head>
            <body>
                <div class="wrapper">
                    <h1>XML Sitemap - Clever-Autoankauf</h1>
                    <p>Diese XML-Sitemap enthält <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs.</p>
                    <table>
                        <tr>
                            <th>URL</th>
                            <th>Priorität</th>
                            <th>Änderungshäufigkeit</th>
                            <th>Letzte Änderung</th>
                        </tr>
                        <xsl:for-each select="sitemap:urlset/sitemap:url">
                            <tr>
                                <td>
                                    <a class="url" href="{sitemap:loc}">
                                        <xsl:value-of select="sitemap:loc"/>
                                    </a>
                                </td>
                                <td class="priority">
                                    <xsl:value-of select="sitemap:priority"/>
                                </td>
                                <td class="changefreq">
                                    <xsl:value-of select="sitemap:changefreq"/>
                                </td>
                                <td class="lastmod">
                                    <xsl:value-of select="sitemap:lastmod"/>
                                </td>
                            </tr>
                        </xsl:for-each>
                    </table>
                </div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>