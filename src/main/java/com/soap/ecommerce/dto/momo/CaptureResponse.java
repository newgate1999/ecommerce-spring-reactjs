package com.soap.ecommerce.dto.momo;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
public class CaptureResponse {
    private String orderId;
    private String requestId;
    private String message;
    private String payUrl;
}
