package mirim.itshow.kiru.controller.json;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import mirim.itshow.kiru.entity.RentDeliverInfo;
import mirim.itshow.kiru.entity.RentItem;

import java.util.List;

// TODO DTO인가?
@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class RentJson { //가장 상위
    @JsonProperty("date")
    private String date;

    @JsonProperty("deliverInfo")
    private DeliverInfoJson deliverInfos;

    @JsonProperty("items")
    private List<ItemsJson> rentItems;
}

/*
{
    "date": "20231022-20231023",
    "deliverInfo": {
        "country": "한국국",
        "address": "서울시시",
        "name": "백지민민",
        "phone": "010-1111-2222",
        "email": "12@e-mirim.hs.kr"
    },

    "items": [
            {"itemId": "22", "color":"옥색", "size":"M", "amount": "1"},
            {"itemId": "26", "color":"청색", "size":"L", "amount": "1"},
            {"itemId": "79", "color":"황색", "size":"M", "amount": "1"}
    ]
}
 */
