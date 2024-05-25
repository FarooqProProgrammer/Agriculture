const SeoModel = require("../../Models/Seo");

class Seo {
    static async createOrUpdateSeo(req, res) {
        const { MetaTitle, MetaDescription, CanonicalTag, uniqueId } = req.body;

        try {
            // Check if a record with the provided uniqueId already exists
            let seoRecord = await SeoModel.findOne({ where: { uniqueId: uniqueId } });

            if (seoRecord) {
                // Record exists, update it
                await seoRecord.update({
                    MetaTitle: MetaTitle,
                    MetaDescription: MetaDescription,
                    CanonicalTag: CanonicalTag
                });
                return res.redirect('/admin-blog')
            } else {
                // Record does not exist, create a new one
                await SeoModel.create({
                    MetaTitle: MetaTitle,
                    MetaDescription: MetaDescription,
                    CanonicalTag: CanonicalTag,
                    uniqueId: uniqueId
                });
                return res.redirect('/admin-blog')
            }
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                message: "Unable to create or update the record!"
            });
        }
    }
}

module.exports = Seo;
