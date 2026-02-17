<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9">

  <xsl:output method="html" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html lang="ar" dir="rtl">
      <head>
        <meta charset="UTF-8"/>
        <title>Sitemap Index</title>
        <style>
          body{font-family:system-ui,Segoe UI,Arial;background:#f8fafc;margin:0;padding:24px}
          .wrap{max-width:980px;margin:0 auto}
          h1{margin:0 0 12px;font-size:26px}
          p{margin:0 0 18px;color:#475569;line-height:1.8}
          table{width:100%;border-collapse:collapse;background:#fff;border:1px solid #e2e8f0;border-radius:14px;overflow:hidden}
          th,td{padding:12px 14px;border-bottom:1px solid #e2e8f0;text-align:right;font-size:14px}
          th{background:#0f172a;color:#fff;font-weight:800}
          a{color:#0f766e;font-weight:800;text-decoration:none}
          a:hover{text-decoration:underline}
        </style>
      </head>
      <body>
        <div class="wrap">
          <h1>خريطة الموقع (Sitemap Index)</h1>
          <p>اضغط على أي خريطة فرعية لعرضها.</p>

          <table>
            <tr>
              <th>الخريطة</th>
              <th>آخر تعديل</th>
            </tr>

            <xsl:for-each select="s:sitemapindex/s:sitemap">
              <tr>
                <td>
                  <a>
                    <xsl:attribute name="href"><xsl:value-of select="s:loc"/></xsl:attribute>
                    <xsl:value-of select="s:loc"/>
                  </a>
                </td>
                <td><xsl:value-of select="s:lastmod"/></td>
              </tr>
            </xsl:for-each>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
