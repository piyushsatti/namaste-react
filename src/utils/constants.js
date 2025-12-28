import React, { useState } from "react";

const RES_DATA = [
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "1037841",
          "name": "Mr Phillys American Cheeseburgers",
          "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/6/14/e32f6c07-56eb-49d6-9d33-fbb90a523f05_8191ba06-7ef4-41ab-822b-307d99fd7060.jpgImage preview",
          "locality": "Frazer Town",
          "areaName": "Frazer Town",
          "costForTwo": "₹500 for two",
          "cuisines": [
            "Burgers",
            "American",
            "Biryani",
            "Fast Food"
          ],
          "avgRating": 4.3,
          "parentId": "516779",
          "avgRatingString": "4.3",
          "totalRatingsString": "2.7K+",
          "sla": {
            "deliveryTime": 24,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-12-27 05:00:00",
            "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {},
              "textExtendedBadges": {},
              "textBased": {}
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹149",
            "logoCtx": {
              "text": "BENEFITS"
            }
          },
          "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {},
            "commsStyling": {}
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {},
              "video": {}
            }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
            "aggregatedRating": {
              "rating": "4.4",
              "ratingCount": "288"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
          "link": "swiggy://menu?restaurant_id=1037841&source=collection&query=Biryani",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "70161",
          "name": "Imperio Restaurant Since 2010",
          "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/4/9/12abc919-a9d6-426a-b026-f30df5f5832f_be608e5f-60a2-4c2e-895f-e21520032d52.png_compressed",
          "locality": "Kalyan Nagar",
          "areaName": "Kammanahalli/Kalyan Nagar",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Biryani",
            "Kebabs",
            "South Indian",
            "Tandoor",
            "Arabian"
          ],
          "avgRating": 4.3,
          "parentId": "659939",
          "avgRatingString": "4.3",
          "totalRatingsString": "81K+",
          "promoted": true,
          "adTrackingId": "cid=2ee8b998-58c1-4fce-b0ec-4678cad28141~p=10~adgrpid=2ee8b998-58c1-4fce-b0ec-4678cad28141#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=70161~plpr=COLLECTION~eid=96a1ca65-2be1-494e-a027-f87052dafc1a~srvts=1766776797215~collid=83639",
          "sla": {
            "deliveryTime": 37,
            "lastMileTravel": 9.1,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "9.1 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-12-27 04:00:00",
            "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {},
              "imageBased": {},
              "textExtendedBadges": {}
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹109",
            "logoCtx": {
              "text": "BENEFITS"
            }
          },
          "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {},
            "commsStyling": {}
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {},
              "video": {}
            }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
            "aggregatedRating": {
              "rating": "4.1",
              "ratingCount": "12K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          "campaignId": "2ee8b998-58c1-4fce-b0ec-4678cad28141"
        },
        "analytics": {},
        "cta": {
          "link": "swiggy://menu?restaurant_id=70161&source=collection&query=Biryani",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "34269",
          "name": "Hamza hotel",
          "cloudinaryImageId": "gcvcu4mngzje5cnv13kw",
          "locality": "Shivaji Nagar",
          "areaName": "Central Bangalore",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Continental",
            "Street Food"
          ],
          "avgRating": 4.4,
          "parentId": "21662",
          "avgRatingString": "4.4",
          "totalRatingsString": "37K+",
          "sla": {
            "deliveryTime": 24,
            "lastMileTravel": 2.5,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "2.5 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-12-27 03:00:00",
            "opened": true
          },
          "badges": {},
          "isOpen": true,
          "aggregatedDiscountInfoV2": {},
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textExtendedBadges": {},
              "textBased": {},
              "imageBased": {}
            }
          },
          "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {},
            "commsStyling": {}
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {},
              "video": {}
            }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
            "aggregatedRating": {
              "rating": "3.9",
              "ratingCount": "7.3K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {},
        "cta": {
          "link": "swiggy://menu?restaurant_id=34269&source=collection&query=Biryani",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  },
  {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "30530",
          "name": "Hotel Empire",
          "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/9/14/f14c542c-a59a-497f-808e-63dcd358344e_850d5850-d55c-43cc-bf1d-6055cf760072.png_compressed",
          "locality": "Vasanth Nagar",
          "areaName": "Vasanth Nagar",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Kebabs",
            "Biryani"
          ],
          "avgRating": 4.6,
          "parentId": "475",
          "avgRatingString": "4.6",
          "totalRatingsString": "22K+",
          "promoted": true,
          "adTrackingId": "cid=63a9d678-5bb0-42c9-99c4-7c1d8085d505~p=12~adgrpid=63a9d678-5bb0-42c9-99c4-7c1d8085d505#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=30530~plpr=COLLECTION~eid=581deea8-2010-4e77-b4a8-06b14b697732~srvts=1766776797215~collid=83639",
          "sla": {
            "deliveryTime": 24,
            "lastMileTravel": 1.3,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "1.3 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-12-27 03:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "android/static-assets/icons/big_rx.pngImage preview",
                "description": "bolt!"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {},
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "imageId": "android/static-assets/icons/big_rx.pngImage preview",
                      "description": "bolt!"
                    }
                  }
                ]
              },
              "textExtendedBadges": {}
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹119",
            "logoCtx": {
              "text": "BENEFITS"
            }
          },
          "orderabilityCommunication": {
            "title": {},
            "subTitle": {},
            "message": {},
            "customIcon": {},
            "commsStyling": {}
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {},
              "video": {}
            }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {},
          "externalRatings": {
            "aggregatedRating": {
              "rating": "4.5",
              "ratingCount": "15K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          "campaignId": "63a9d678-5bb0-42c9-99c4-7c1d8085d505"
        },
        "analytics": {},
        "cta": {
          "link": "swiggy://menu?restaurant_id=30530&source=collection&query=Biryani",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  }
]

export default RES_DATA;